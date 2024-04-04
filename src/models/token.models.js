// const mongoose = require('mongoose');
// const { toJSON } = require('./plugins');
// const { tokenTypes } = require('../config/tokens');
const redis = require('../middlewares/redis');

const create = async(data) => {
  const intExpire = new Date(data.expires).getTime();
  return await redis.setEx(
    `${data.type}:${data.user}`,  intExpire, data.token
  );
}

module.exports = {
  create,
};