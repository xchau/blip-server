const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const multer = require('multer');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const test = require('./routes/test');
const auth = require('./routes/auth');
const entries = require('./routes/entries');
const trips = require('./routes/trips');
const users = require('./routes/users');
// const photos = require('./routes/photos');

app.disable('x-powered-by');

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '5mb'}));

app.use('/test', test);
app.use('/auth', auth);
app.use('/trips', entries);
app.use('/trips', trips);
app.use('/users', users);
// app.use('/photos', photos);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'application/json')
      .send(err);
  }
  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.status(err.status || 500);
});

module.exports = app;
