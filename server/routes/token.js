'use strict';

const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

router.get('/token', (req, res, _next) => {
  const userToken = req.get('Authorization');
  console.log(userToken);

  jwt.verify(userToken, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return res.send(false);
    }

    res.claim = payload;
    res.send(res.claim);
  });
});

module.exports = router;
