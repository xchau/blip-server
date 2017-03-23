'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const cloudinary = require('../../cloudinary');
const knex = require('../../knex');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  knex('trips')
    .select('trips.id', 'trips.user_id', 'trips.destination', 'trips.title', 'trips.cover_photo', 'trips.votes', 'trips.published', 'trips.updated_at', 'users.username', 'users.profile_pic AS poster_pic')
    .orderBy('trips.created_at', 'DESC')
    .innerJoin('users', 'users.id', 'trips.user_id')
    .then((rows) => {
      if (!rows.length) {
        throw boom.create(400, 'No trips available');
      }

      res.send(camelizeKeys(rows));
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const {
    title,
    destination,
    description,
    user_id,
    cover_photo
  } = decamelizeKeys(req.body);

  const photo = `data:image/jpg;base64,${cover_photo}`;

  cloudinary.v2.uploader.upload(photo, {
    quality: 50,
  }, (error, result) => {
    if (error) {
      console.error(`Cloudinary Error: ${error}`);
    }

    let insertedTrip;

    knex('trips')
      .insert({
        title,
        destination,
        description,
        user_id,
        cover_photo: result.secure_url
      }, '*')
      .then((trips) => {
        const trip = camelizeKeys(trips[0]);

        insertedTrip = trip;

        return knex('users')
          .where('id', user_id)
          .update('is_traveling', insertedTrip.id)
      })
      .then(() => {
        console.log(insertedTrip);
        res.send(insertedTrip);
      })
      .catch((err) => {
        next(err);
      });
  });
});

module.exports = router;
