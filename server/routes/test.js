'use strict';

const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();



// TEST ROUTES //
router.get('/', (req, res) => {
  res.send('HI FROM API');
});

router.get('/users', (req, res, next) => {
  knex('users')
    .orderBy('id')
    .then((users) => {
      if (!users.length) {
        return next();
      }
      console.log(users);

      for (const user of users) {
        delete user.id;
        delete user.h_pw;
      }

      res.send(camelizeKeys(users));
    });
});

module.exports = router;
