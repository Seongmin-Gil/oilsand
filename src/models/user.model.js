const { appData } = require('../middlewares/dataSource');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { roles } = require('../config/roles');

const salt = 10;

//email check
const isUserIdTaken = async(userId) => {
    return await appData.query(
        `SELECT 'id' FROM user WHERE userId = ?;`, [userId]
    )
}

const create = async(userBody) => {
    const encryptedPassword = await bcrypt.hash(userBody.password, salt);
    const result = await appData.query(
        `INSERT INTO user(
            userId,
            password,
            name,
            position,
            class
        ) VALUES (?,?,?,?,?);`,
        [userBody.id, encryptedPassword, userBody.name, userBody.position, userBody.part]
    )
    return result;
}

const paginate = async(filter, options) => {
    return await appData.query(
        `
        SELECT * FROM user
        `
    )
}

const findById = async(id) => {
    return await appData.query(
        `
        SELECT * FROM user WHERE id = ?; 
        `,
        [id]
    )
}

const updateId = async(updateBody) => {
    return await appData.query(
        `
        UPDATE user
        SET name = ?, position = ?, class = ?
        WHERE id = ?;
        `, [updateBody.name, updateBody.position, updateBody.class, updateBody.id]
    )
} 

const removeUser = async(userData) => {
    await appData.query(
        `
        DELETE FROM user WHERE id = ?;
        `, [userData.id]
    )
    return;
}

module.exports = {
    isUserIdTaken,
    create,
    paginate,
    findById,
    updateId,
    removeUser,
}
