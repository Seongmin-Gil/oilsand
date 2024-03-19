const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '1.0.0',
  info: {
    title: 'ES-SAGD Back-Server API documentation',
    version,
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
