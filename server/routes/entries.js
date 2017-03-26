'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const multer = require('multer');
const router = require('express').Router();

const upload = multer();

const authorize = function(req, res, next) {
  const userToken = req.get('Authorization').split(' ')[1];

  jwt.verify(userToken, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return next(boom.create(401, 'Please log in'));
    }

    req.claim = payload;

    next();
  });
};

router.get('/:id/entries', (req, res, next) => {
  const id = req.params.id;

  knex('entries')
    .where('trip_id', id)
    .orderBy('id')
    .then((entries) => {
      if (!entries.length) {
        return res.send([]);
      }

      res.send(camelizeKeys(entries));
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/entries', authorize, (req, res, next) => {
  console.log(req.body);
  const { entry_title, note } = decamelizeKeys(req.body);

});

module.exports = router;
