const {Mongo,Schema} = require('./db');

const PostSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: [String], default: []},
    category: {type: Schema.Types.ObjectId, required:true,ref:'categories'},
    tag : {type: Schema.Types.ObjectId, required:true,ref:'tags'},
    author : {type: Schema.Types.ObjectId, required:true,ref:'users'},
    likes : {type: Number, default: 0},
    views : {type: Number, default: 0},
    created : {type: Date, default: Date.now},
});
UserSchema.index({tag:1, author:1, category:1});

const Post = Mongo.model('posts', PostSchema);

module.exports = Post;