'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const cloudinary = require('../../cloudinary');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

const authorize = function(req, res, next) {
  const userToken = req.get('Authorization').split(' ')[1];
  console.log(userToken);

  jwt.verify(userToken, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return next(boom.create(401, 'Please log in'));
    }

    req.claim = payload;

    next();
  });
};

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

router.patch('/publish', authorize, (req, res, next) => {
  const { tripId } = req.body;

  let status;
  let tripInfo;
  let isTraveling;

  knex('trips')
    .select('published')
    .where('id', tripId)
    .first()
    .then((res) => {
      status = res.published;
      status = !status;

      return knex('trips')
        .where('id', tripId)
        .update('published', status)
        .returning('*');
    })
    .then((trips) => {
      tripInfo = camelizeKeys(trips[0]);

      if (status) {
        isTraveling = 0;
      }
      else {
        isTraveling = tripInfo.id;
      }

      return knex('users')
        .where('id', req.claim.userId)
        .update('is_traveling', isTraveling)
        .returning('*');
    })
    .then((users) => {
      const user = camelizeKeys(users[0]);
      const resObject = {
        user,
        tripInfo,
        isTraveling
      };

      res.send(resObject);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', authorize, (req, res, next) => {
  const id = req.params.id;

  knex('trips')
    .where('id', id)
    .del('*')
    .then((trips) => {
      const deletedTrip = camelizeKeys(trips[0]);

      res.send(deletedTrip);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
