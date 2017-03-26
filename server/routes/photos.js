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
        throw boom.create(400, 'No images available');
      }

      res.send(camelizeKeys(photos));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
