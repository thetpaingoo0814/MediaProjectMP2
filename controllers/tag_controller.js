const {Msg, TagService} = require('../utils/facade');

const all = async (req, res, next) => {

    let tags = await TagService.getAll();
    if (!tags) {
        next(new Error("Something went wrong Contact the developer"));
    } else {
        Msg(res, "All tags", tags);
    }
}

const get = async (req, res, next) => {
    let tag = await TagService.getById(req.params.id);
    if (!tag) {
        next(new Error("Tag not found"));
    } else {
        Msg(res, "Tag found", tag);
    }
}

const create = async (req, res, next) => {
    let name = req.body.name.toLowerCase();
    let dbTags = await TagService.getByName(name);
    if (dbTags) {
        next(new Error("Tag already exists"));
    }else{
        let result = await TagService.add(name);
        Msg(res, "Tag added", result);
    }
}

const update = async(req,res,next)=>{
    let id= req.params.id;
    let tag = await TagService.getById(id);
    if(tag){
        let result = await TagService.modify(tag._id,req.body);
        Msg(res,"Tag Updated", result);
    }else{
        next(new Error("No Tag with that id!"));
    }
}

const drop = async (req, res, next) => {
    let id = req.params.id;
    let tag = await TagService.getById(id);
    if (tag) {
        let result = await TagService.remove(tag._id);
        Msg(res, "Tag Deleted", result);
    } else {
        next(new Error("No Tag with that id!"));
    }   
}

module.exports = {
    all,
    create,
    get,
    update,
    drop
}