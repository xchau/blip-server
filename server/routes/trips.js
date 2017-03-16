'use strict';

// const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
// const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  knex('trips')
    .select('trips.id, destination, subtitle, votes, trips.updated_at, cover_photo, name')
    .orderBy('created_at', 'DESC')
    .innerJoin('users', 'trips.user_id', 'users.id')
    .then((rows) => {
      res.send(camelizeKeys(rows));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
