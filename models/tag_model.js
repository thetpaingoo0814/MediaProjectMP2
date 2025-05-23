const {Mongo,Schema} = require('./db');

const TagSchema = new Schema({
    name: {type: String,unique:true, required: true},
})

const Tag = Mongo.model('Tags', TagSchema);

module.exports = Tag;