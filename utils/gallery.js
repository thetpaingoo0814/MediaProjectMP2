const fs = require('fs'),
    path = require('path');

const getFilePath = (filename) => path.join(__dirname,"../public/images/" + filename);
const getImageLink = (filename) => `${process.env.IMAGE_PATH}/${filename}`;
const genFileName = (filename) => new Date().valueOf() + "_"+filename.replace(/\s/g,'');

const saveSingleFile = (req,res,next) => {
    if(req.files){
        if(req.files.file){
            let fileName = genFileName(req.files.file.name)
        }else next(new Error("No File"));
    }else next(new Error("No File"));
}
const saveMultipleFile = () => {}
const deleteImageByName = () => {}
const deleteImageByLink  = () => {}

module.exports =  {
    saveSingleFile,
    saveMultipleFile,
    deleteImageByName,
    deleteImageByLink
}