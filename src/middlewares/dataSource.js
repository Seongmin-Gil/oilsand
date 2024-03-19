const { DataSource } = require('typeorm');
const config = require('../config/config');
const logger = require('../config/logger');
const appData = new DataSource({
    type: config.Database.type,
    host: config.Database.url,
    port: config.Database.port,
    username: config.Database.username,
    password: config.Database.password,
    database: config.Database.DB_name
});

appData.initialize().then(() => {
    logger.info('DataSource has been initialized!')
}).catch(err => {
    logger.error('Error during DataSource initialization', err);
    appData.destroy();
});

module.exports = { appData };