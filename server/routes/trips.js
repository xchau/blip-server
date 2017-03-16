'use strict';

// const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
// const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  knex('trips')
    .select('trips.id', 'trips.user_id', 'trips.destination', 'trips.subtitle', 'trips.cover_photo', 'trips.votes', 'trips.updated_at', 'users.username')
    .orderBy('trips.created_at', 'DESC')
    .innerJoin('users', 'users.id', 'trips.user_id')
    .then((rows) => {
      res.send(camelizeKeys(rows));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
