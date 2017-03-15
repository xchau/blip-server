'use strict';

const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

router.get('/', (req, res, _next) => {
  const userToken = req.get('Authorization').split(' ')[1];

  jwt.verify(userToken, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      console.log(err);
      return res.send(false);
    }

    res.claim = payload;
    res.send(res.claim);
  });
});

router.post('/login', (req, res, _next) => {
  const { email, password } = req.body;

  let user;

  knex('users')
    .where('email', email)
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
