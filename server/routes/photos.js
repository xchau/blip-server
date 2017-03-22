const router = require('express').Router();
const cloudinary = require('cloudinary');

router.post('/cover', (req, res, next) => {
  console.log(req.body);

  
});

module.exports = router;
