'use strict';

const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

// AUTHORIZATION //
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

// AUTHENTICATION //
router.post('/login', (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  let user;

  knex('users')
    .where('email', email.trim())
    .first()
    .then((result) => {
      if (!result) {
        throw boom.create(400, 'Invalid email or password');
      }
      console.log(result);

      user = result;

      return bcrypt.compare(password, user.h_pw);
    })
    .then(() => {
      const claim = { userId: user.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '7 days'
      });
      console.log('LOOK HERE');

      user.token = token;

      delete user.h_pw;

      res.send(user);
    })
    .catch((bcrypt.MISMATCH_ERROR), () => {
      throw boom.create(400, 'Invalid email or password');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
