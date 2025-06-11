const PostModel = require('../models/post_model');

const getById = async (id) => await PostModel.findById(id);

const getByTag = async (tagId, pageIndex) => {
    let pageCount = 10;
    let posts = await PostModel.find({tags: tagId}).skip(pageIndex * pageCount).sort({'created': -1}).limit(pageCount);
    return posts;
}
const getByCat = async (catId, pageIndex) => {
    let pageCount = 10;
    let posts = await PostModel.find({category: catId}).skip(pageIndex * pageCount).sort({'created': -1}).limit(pageCount);
    return posts;
}
const getByAuthor = async (authId, pageIndex) => {
    let pageCount = 10;
    let posts = await PostModel.find({author: authId}).skip(pageIndex * pageCount).sort({'created': -1}).limit(pageCount);
    return posts;
}

const get = async (pageIndex)=> {
    let pageCount = 10;
    let posts = await PostModel.find({}).skip(pageIndex * pageCount).sort({'createdAt': -1}).limit(pageCount);
    return posts;
}

const add = async (post) => {
    let result = null;
    try {
        result = await new PostModel(post).save();
    }catch (error) {
        console.log(error);
    }finally {
        return result;
    }
}

const update = async (id,data) => {
    let result = null;
    try {
        result = await PostModel.findByIdAndUpdate(id, data, {new: true});
    }catch (error) {
        console.log(error);
    }finally {
        return result;
    }
}

const drop = async (id) => await PostModel.findByIdAndDelete(id);

module.exports = {
    getById,
    getByTag,
    getByCat,
    getByAuthor,
    get,
    add,
    update,
    drop
}