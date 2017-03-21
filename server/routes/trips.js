'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const knex = require('../../knex');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  knex('trips')
    .select('trips.id', 'trips.user_id', 'trips.destination', 'trips.subtitle', 'trips.cover_photo', 'trips.votes', 'trips.updated_at', 'users.username', 'users.profile_pic AS poster_pic')
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
  const { title, destination, cover_photo } = decamelizeKeys(req.body);

  knex('trips')
    .insert({
      title,
      destination,
      cover_photo
    }, '*')
    .then((trips) => {
      const trip = camelizeKeys(trips[0]);

      res.send(trip);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
