const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const users = require('./routes/users');
const token = require('./routes/token');

app.disable('x-powered-by');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', users);
app.use('/auth', token);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, _next) => {
  if (err.output && err.output.statusCode) {
    console.log('conditional: ', err);
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err);
  }

  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.status(err.status || 500);
});

module.exports = app;
