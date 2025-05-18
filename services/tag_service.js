const model = require('../models/tag_model');

const getAll = async () => {
    let tags = null;
    try {
        tags = await model.find();
    }catch (error) {
        console.log("Error at getAll tags");
    }finally {
        return tags;
    }
}
const getByName = async (name) => {
    let tag = null;
    try {
        tag = await model.findOne({name});
    }catch (error) {
        console.log("Error at getByName tags");
    }finally {
        return tag;
    }
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
    let result = null;
    try {
        result = await new model({name}).save();
    }catch (error) {
        console.log("Error at add tags"); 
    }
    finally {
        return result;
    }
}

const modify = async(id,obj)=> {
    let result = null;
    try {
        result = await model.findByIdAndUpdate(id, obj,{new:true});
    }catch (error) {
        console.log("Error at modify tags");
    }
    finally {
        return result;
    }
}

const remove = async (id) => {
    let result = null;
    try {
        result = await model.findByIdAndDelete(id);
    }
    catch (error) {
        console.log("Error at remove tags");
    }
    finally {
        return result;
    }
}

module.exports = {
    getAll,
    getByName,
    getById,
    add,
    modify,
    remove
}