const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const knex = require('../../knex');
const router = require('express').Router();

router.get('/:id', (req, res, next) => {
  const tripId = req.params.id;

  knex('photos')
    .where('trip_id', tripId)
    .then((photos) => {
      if (!photos.length) {
        throw boom.create(400, 'No images available');
      }

      res.send(camelizeKeys(photos));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
