const {Msg , CommentService} = require('../utils/facade');

const getCommentByPostId = async (req, res, next) => {
    let role = req.user.role;
    let postId = req.params.id;
    let comments = await CommentService.get(role, postId);
    Msg(res, "All comments", comments);
}
const add = async (req, res, next) => {

    let comObj = {
        postId:req.body.postId,
        user : req.userId,
        content : req.body.content,
        image : req.body.image
    }
    let saveComment = await CommentService.add(comObj);
    Msg(res, "Comment saved", saveComment);
}

const updateStatus = async (req, res, next) => {
    let commentId = req.params.id;
    let status = req.body.status;
    let updatedComment = await CommentService.modify(commentId, {status});
    Msg(res, "Comment status updated", updatedComment);
}

const dropComment = async (req, res, next) => {
    let commentId = req.params.id;
    let dropComment = await CommentService.drop(commentId);
    Msg(res, "Comment deleted", dropComment);
}

module.exports = {
    getCommentByPostId,
    add,
    updateStatus,
    dropComment
}