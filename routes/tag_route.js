const router = require('express').Router();
const Controller = require('../controllers/tag_controller');
const {validateBody, validateToken,validateRole} = require('../utils/validator');
const {TagSchema} = require('../utils/schemas/tag_schema');

router.get('/', Controller.all);
router.post('/',validateBody(TagSchema.add),validateToken,validateRole(0), Controller.create);
router.get('/single/:id',validateToken,validateRole(0), Controller.get);
router.patch('/:id',validateBody(TagSchema.patch), validateToken, validateRole(0), Controller.update);
router.delete('/:id', validateToken, validateRole(0), Controller.drop);

module.exports = router;