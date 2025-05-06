const model = require('../models/user_model');

const getByName = async (name) => {
    let user = await model.findOne({ name });
    return user;
}

const getByPhone = async (phone) => {
    let user = await model.findOne({phone});
    return user;
}

const add = async(name,displayName, phone, password) => {
    let profile = process.env.IMAGE_PATH +"/1.png"
    let result = await new model({name,displayName, phone, password, profile}).save();
    return result;
}

module.exports = {
    getByName,
    getByPhone,
    add
}