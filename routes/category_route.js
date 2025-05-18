const router = require('express').Router();
const Controller = require('../controllers/category_controller');
const { validateToken, validateRole, saveSingleFile } = require('../utils/facade');

router.post('/',validateToken, validateRole(0),saveSingleFile, Controller.add);
router.patch('/:id',validateToken, validateRole(0), Controller.update);
router.delete('/:id',validateToken, validateRole(0), Controller.drop);

module.exports = router;
