'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const cloudinary = require('../../cloudinary');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();

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

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('users')
    .where('id', id)
    .first()
    .then((user) => {
      if (!user) {
        throw boom.create(404, 'No user found');
      }

      res.send(camelizeKeys(user));
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/', authorize, (req, res, next) => {
  const { userId } = req.claim;

  let { photo } = req.body;

  photo = 'data:image/jpg;base64,' + photo;
  console.log(photo);

  cloudinary.v2.uploader.upload(photo, {
    quality: 50
  }, (err, result) => {
    if (err) {
      next(err);
    }

    knex('users')
      .where('id', userId)
      .first()
      .update({
        profile_pic: result.secure_url
      }, '*')
      .then((users) => {
        const user = camelizeKeys(users[0]);
        console.log(user);
        const resObject = {
          updatedProfilePic: result,
          user
        };

        res.send(user);
      })
      .catch((err) => {
        next(err);
      });
  });
});

module.exports = router;
