const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const knex = require('../../knex');
const router = require('express').Router();

router.get('/:id', (req, res, next) => {
  const entryId = req.params.id;

  knex('photos')
    .where('entry_id', entryId)
    .then((photos) => {
      if (!photos.length) {
        return res.send([]);
      }

      res.send(camelizeKeys(photos));
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/random/:id', (req, res, next) => {
  const tripId = req.params.id;

  knex('entries')
    .where('trip_id', tripId)
    .then((entries) => {
      if (!entries.length) {
        return res.send([]);
      }

      const first = entries[0];

      return knex('photos')
        .where('entry_id', first.id)
    })
    .then((photos) => {
      if (!photos.length) {
        return res.send([]);
      }

      res.send(camelizeKeys(photos));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
