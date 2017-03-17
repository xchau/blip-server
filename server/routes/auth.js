'use strict';

const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

// TOKEN AUTHORIZATION //
router.get('/', (req, res, _next) => {
  const userToken = req.get('Authorization').split(' ')[1];

  jwt.verify(userToken, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return res.send(false);
    }

    res.claim = payload;
    res.send(true);
  });
});

// LOGIN AUTHENTICATION //
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  let user;

  knex('users')
    .where('email', email.trim())
    .first()
    .then((result) => {
      if (!result) {
        throw boom.create(400, 'Invalid email or password');
      }

      user = result;

      return bcrypt.compare(password, user.h_pw);
    })
    .then(() => {
      const claim = { userId: user.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '7 days'
      });

      user.token = token;

      delete user.h_pw;

      res.send(camelizeKeys(user));
    })
    .catch((bcrypt.MISMATCH_ERROR), () => {
      throw boom.create(400, 'Invalid email or password');
    })
    .catch((err) => {
      next(err);
    });
});

// REGISTRATION + AUTHENTICATION //
router.post('/register', (req, res, next) => {
  const {
    username,
    email,
    profile_pic,
    password,
    nationality
  } = decamelizeKeys(req.body);

  // VALIDATION //
  knex('users')
    .where('email', email)
    .orWhere('username', username)
    .then((results) => {
      if (results.length) {
        throw boom.badRequest('Email/username is taken.')
      }

      return bcrypt.hash(password, 12);
    })
    .then((h_pw) => {
      return knex('users')
        .insert({
          username,
          email,
          profile_pic,
          h_pw,
          nationality
        }, '*');
    })
    .then((users) => {
      const user = users[0];
      console.log(user);

      const claim = { userId: user.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '7 days'
      });

      user.token = token;

      delete user.h_pw;

      res.send(camelizeKeys(user));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
