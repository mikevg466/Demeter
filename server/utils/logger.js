const winston = require('winston');

const level = process.env.LOG_LEVEL || 'debug';

// eslint-disable-next-line new-cap
const logger = new winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: level,
      timestamp: function() {
        return new Date().toISOString();
      },
    }),
  ],
});

module.exports = logger;
