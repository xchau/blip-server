'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const knex = require('../../knex');
const router = require('express').Router();

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

module.exports = router;
