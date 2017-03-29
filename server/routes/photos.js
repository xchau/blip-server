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
      if (entries.length === 0) {
        return res.send([]);
      }

      const sorted = entries.sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        }
        else if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
      console.log(sorted);

      const first = sorted[0];
      console.log(first);

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
