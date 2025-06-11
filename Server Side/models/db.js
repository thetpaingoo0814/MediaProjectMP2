const mongoose = require('mongoose');
const {Schema} = mongoose;

const getObjectId = () => mongoose.Types.ObjectId();

module .exports = {
    Mongo: mongoose,
    getObjectId,
    Schema,
    };