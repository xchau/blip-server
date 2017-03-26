'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const cloudinary = require('../../cloudinary');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

const authorize = function(req, res, next) {
  const userToken = req.get('Authorization').split(' ')[1];

  jwt.verify(userToken, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return next(boom.create(401, 'Please log in'));
    }

    req.claim = payload;

    next();
  });
};

router.get('/:id/entries', (req, res, next) => {
  const id = req.params.id;

  knex('entries')
    .where('trip_id', id)
    .orderBy('id')
    .then((entries) => {
      if (!entries.length) {
        return res.send([]);
      }

      res.send(camelizeKeys(entries));
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/entries', authorize, (req, res, next) => {
  const { trip_id,
    entry_title,
    note,
    caption,
    image
  } = decamelizeKeys(req.body);

  const photo = `data:image/jpg;base64,${image}`;

  let insertedEntry;
  let photoObj;

  cloudinary.v2.uploader.upload(photo, {
    quality: 50,
  }, (error, result) => {
    if (error) {
      console.error(`Cloudinary Error: ${error}`);
    }

    photoObj = result;

    knex('entries')
      .insert({
        entry_title,
        note,
        trip
      }, '*')
      .then((entries) => {
        insertedEntry = camelizeKeys(entries[0]);

        return knex('photos')
          .insert({
            entry_id: insertedEntry.id,
            caption: insertedEntry.caption,
            photo_url: photoObj.secure_url,
          }, '*');
      })
      .then((photos) => {
        const photo = camelizeKeys(photos[0]);

        const resObject = {
          photo,
          insertedTrip
        };

        res.send(resObject);
      })
      .catch((err) => {
        next(err);
      });
  });
});

module.exports = router;
