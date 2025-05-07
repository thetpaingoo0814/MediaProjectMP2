const {saveSingleFile,saveMultipleFile,deleteImageByName,deleteImageByLink} = require('./gallery');
const {RDB, ENCODER,TOKEN,Msg, makeRandom} = require('./util');
const {validateToken,validateRole,validateStaff,validateBody} = require('./validator');

const UserService = require('../services/user_service');
const {userSchema} = require('./schemas/user_schema');

module.exports = {
    saveSingleFile,
    saveMultipleFile,
    deleteImageByName,
    deleteImageByLink,

    RDB,
    ENCODER,
    TOKEN,
    Msg,
    makeRandom,

    userSchema,

    validateToken,
    validateRole,
    validateStaff,
    validateBody,
    UserService,
}