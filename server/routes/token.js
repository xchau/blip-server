'use strict';

const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

router.get('/', (req, res, _next) => {
  const userToken = req.get('Authorization');

  jwt.verify(userToken, process.env.JWT_KEY, (err, payload) => {
    console.log(userToken, process.env.JWT_KEY);
    if (err) {
      console.log(err);
      return res.send(false);
    }

    res.claim = payload;
    res.send(res.claim);
  });
});

module.exports = router;
