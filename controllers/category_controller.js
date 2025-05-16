const {CategoryService, Msg, deleteImageByLink} = require('../utils/facade');

const all = async(req, res) => {
    let cats = await CategoryService.getAll();
    Msg(res,"All categories",cats);
}

const add = async(req, res , next) => {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.desc;

    let result = await CategoryService.add(name, image, desc);
    Msg(res,"New Categroy Created!",result);
}

const update = async(req, res) => {
    let catId = req.params.id;
    let body = req.body;
    let result = await CategoryService.modify(catId, body);

    Msg(res,"Category Updated!",result);
}

const drop = async(req, res, next) => {
    let catId = req.params.id;
    let category = await CategoryService.getById(catId);
    if(category){
        deleteImageByLink(category.image);
        let result = await CategoryService.remove(catId);
        Msg(res,"Category Deleted!",result);
    }else{
        next(new Error("Category not found!"));
    }
}
const  droping = async(req,res,next)=> {
    console.log("hello");
}


module.exports = {
    all,
    add,
    update,
    drop
}
