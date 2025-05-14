const router = require('express').Router();
const Controller = require('../controllers/tag_controller');
const {validateToken,validateRole} = require('../utils/validator');

router.get('/', Controller.all);
router.post('/',validateToken,validateRole(0), Controller.create);
router.get('/single/:id',validateToken,validateRole(0), Controller.get);
router.patch('/:id', validateToken, validateRole(0), Controller.update);

module.exports = router;