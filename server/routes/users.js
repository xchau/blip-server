'use strict';

const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

// TEST ROUTE //
router.get('/users', (req, res, next) => {
  res.send('Hi from API');
});

// REGISTER USER //
router.post('/users', (req, res, next) => {
  const {
    name,
    username,
    email,
    profile_pic,
    password,
    nationality
  } = decamelizeKeys(req.body);

  // knex('users') VALIDATION HERE
  //   .where('user')

  bcrypt.hash(password, 12)
    .then((h_pw) => {
      return knex('users')
        .insert({
          name,
          username,
          email,
          profile_pic,
          h_pw,
          nationality
        }, '*');
    })
    .then((users) => {
      const user = users[0];

      const claim = { userId: user.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '30 days'
      });

      user.token = token;

      delete user.h_pw;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
