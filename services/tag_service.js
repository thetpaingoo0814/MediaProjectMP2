const model = require('../models/tag_model');
const getAll = async () => {
    let tags = await model.find();
    return tags;
}
const getByName = async (name) => {
    let tag = await model.findOne({name});
    return tag;
}

const getById = async (id) => {
    let tag = null;
    try {
        tag =　await model.findById(id);
    }catch (error) {
        console.log("Here is the error");
    }finally {
        return tag;
    }
}

const add = async (name) => {
    let result = await new model({name}).save();
    return result;
}

const modify = async(id,obj)=> {
    let result = await model.findByIdAndUpdate(id, obj);
    return result;
}

module.exports = {
    getAll,
    getByName,
    getById,
    add,
    modify
}