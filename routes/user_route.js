const router = require('express').Router();
const Controller = require('../controllers/user_controller');
const {validateBody,userSchema} = require('../utils/facade');

router.post('/register',validateBody(userSchema.register), Controller.register);

module.exports = router;
