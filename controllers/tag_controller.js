const {Msg, TagService} = require('../utils/facade');

const all = async (req, res, next) => {
    let tags = await TagService.getAll();
    Msg(res, "All tags", tags);
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

module.exports = {
    all,
    create,
    get
}