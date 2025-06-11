const router = require('express').Router();
const AdvController = require('../controllers/adv_controller');
const CatController = require('../controllers/category_controller');
const TagController = require('../controllers/tag_controller');
const CommentController = require('../controllers/comment_controller');
const PostController = require('../controllers/post_controller');
const UserController = require('../controllers/user_controller');
const { validateToken, validateRole,validateBody, saveSingleFile, userSchema } = require('../utils/facade');
const User = require('../models/user_model');

router.get('/advs',AdvController.allActives);
router.get('/cats',CatController.all);
router.get('/tags',TagController.all);
// Comment routes
router.get('/cmmt/:id',validateToken, CommentController.getCommentByPostId);
router.post('/cmmt',validateToken,validateRole(2),saveSingleFile,CommentController.add);

//Posts
router.get('/post/:index',PostController.get);
router.get('/post/tag/:id/:index', PostController.postsByTag);
router.get('/post/cat/:id/:index', PostController.postsByCat);
router.get('/post/auth/:id/:index', PostController.postsByAuthor);

//User

router.post('/register',validateBody(userSchema.register), UserController.register);
router.post('/login',validateBody(userSchema.login), UserController.login);
router.get('/me',validateToken,UserController.getMe);
router.get("/version", (req, res) => {
    res.status(200).json({msg:"Version 1.0.1"});
});

module.exports = router;
