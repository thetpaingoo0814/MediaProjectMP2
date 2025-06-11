const {Msg, PostService,deleteImageByLink} = require('../utils/facade');

const get = async (req, res, next) => {
    let pageIndex = req.params.index;
    let posts = await PostService.get(pageIndex);
    Msg(res, "Paginaed Posts", posts);
}

const postsByTag = async (req, res, next) => {
    let index = req.params.index;
    let tagId = req.params.id;

    let posts = await PostService.getByTag(tagId, index);

    Msg(res, "Posts By Tag", posts);
}
const postsByCat = async (req, res, next) => {
    let index = req.params.index;
    let catId = req.params.id;

    let posts = await PostService.getByCat(catId, index);

    Msg(res, "Posts By Category", posts);
}
const postsByAuthor = async (req, res, next) => {
    let index = req.params.index;
    let authId = req.params.id;

    let posts = await PostService.getByAuthor(authId, index);

    Msg(res, "Posts By Author", posts);
}

const add = async (req, res, next) => {
    let author = req.userId;
    req.body["author"] = req.userId;
    let result = await PostService.add(req.body);
    Msg(res, "Success", req.body);
}

const update = async (req, res, next) => {
    let id = req.params.id;

    let updateData = req.body;

    let dbPost = await PostService.getById(id);

    if (dbPost) {
        if(Object.keys(updateData).includes('image')) {
            dbPost.images.forEach((image)=>deleteImageByLink(image));
        }
         let result = await PostService.update(dbPost._id, req.body);
         Msg(res, "Post Updated", result);
    }else{
        next(new Error("Post Not Found"));
    }
      
}

const drop = async (req, res, next) => {
    let id = req.params.id;
    let dbPost = await PostService.getById(id);
    if (dbPost) {
        if(dbPost.images.length > 0){
            dbPost.images.forEach((image)=>deleteImageByLink(image));
        }
        let result = await PostService.drop(dbPost._id);
        Msg(res, "Post Deleted", result);
    }else{
        next(new Error("Post Not Found"));
    }
}
module.exports = {
    get,
    postsByTag,
    postsByCat,
    postsByAuthor,
    add,
    update,
    drop
}
