const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Constants = require('./utils/constants.js');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || Constants.DEFAULT_PORT;

/*  ------ logging ------   */
app.use(
  morgan('dev', {
    skip: function(req, res) {
      return res.statusCode < 400;
    },
    stream: process.stderr,
  })
);

app.use(
  morgan('dev', {
    skip: function(req, res) {
      return res.statusCode >= 400;
    },
    stream: process.stdout,
  })
);

/*  ------ middleware ------   */
app
  .use(express.static(path.join(__dirname, '..', 'build')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use((req, res, next) =>
    path.extname(req.path).length > 0
      ? res.status(404).send('Not found')
      : next()
  )
  .use('*', (req, res) =>
    res.sendFile(path.join(__dirname, '..', 'build/index.html'))
  )
  .use((err, req, res, next) =>
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  );

app.listen(PORT, () => logger.info(`Listening on port: ${PORT}!`));

module.exports = app;
