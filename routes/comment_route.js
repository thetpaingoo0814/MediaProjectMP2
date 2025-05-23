const router = require('express').Router();
const Controller = require('../controllers/comment_controller');
const {validateBody, validateToken, saveSingleFile, validateRole, tagSchema} = require('../utils/facade');

router.post('/:id',validateToken,validateRole(0),Controller.updateStatus);
router.delete('/:id',validateToken,validateRole(0),Controller.dropComment);


module.exports = router;