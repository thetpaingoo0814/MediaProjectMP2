const router = require('express').Router();

const Controller = require('../controllers/user_controller');
const { validateBody,validateToken,validateRole, userSchema } = require('../utils/facade');

router.post('/register',validateBody(userSchema.register), Controller.register);
router.post('/login',validateBody(userSchema.login), Controller.login);
router.get('/me',validateToken,Controller.getMe);
router.get('/pagi/:index',validateToken, validateRole(0), Controller.getUsers);
router.get('/single/:id',validateToken, validateRole(0),Controller.getSingleUser);
router.post('/changerole',validateToken, validateRole(0),Controller.changeRole);

module.exports = router;
