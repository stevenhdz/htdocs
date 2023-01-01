const router = require('express').Router();
const commitController = require('../controllers/commit.controller');

router.get('/', commitController.findAllCommit);

router.post('/', commitController.createCommit);

router.get('/:idCharacter', commitController.findCommitById);

module.exports = router;