const redis = require('redis');
const config = require('../config/config');
const logger = require('../config/logger');

//* Redis 연결
// redis[s]://[[username][:password]@][host][:port][/db-number]
const redisClient = redis.createClient({
   url: `redis://${config.Redis.username}:${config.Redis.password}@${config.Redis.host}:${config.Redis.port}/0`,
   legacyMode: true, 
});
redisClient.on('connect', () => {
   logger.info('Redis connected!');
});
redisClient.on('error', (err) => {
   logger.error('Redis Client Error', err);
});
redisClient.connect(); // redis v4 연결 (비동기)
// const redisCli = redisClient.v4;

module.exports = redisClient;