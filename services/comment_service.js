const model = require('../models/comment_model');

const add = async (obj) => {
    let addedComment  = await new model(obj).save();
    return addedComment;
}
const get = async(role, postId) => {
    let comments = [];
    switch(role){
        case 0: comments = await model.find({postId}); break;
        default : comments = await model.find({postId, status: "ACCEPT"}); break;
    }
    return comments;
}
const modify = async (commentId, obj) => {
    let modi = await model.findByIdAndUpdate(commentId, obj, {new:true});
    return modi;
}
const drop = async (commentId) => {
    let drop = await model.findByIdAndDelete(commentId);
    return drop;
}
module.exports = {
    add,
    get,
    modify,
    drop
}