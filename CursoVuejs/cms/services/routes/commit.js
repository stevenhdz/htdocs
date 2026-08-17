const router = require('express').Router();
const commitController = require('../controllers/commit.controller');

router.get('/', commitController.findAllCommit);

router.post('/', commitController.createCommit);

router.get('/:id', commitController.findCommitById);

router.delete('/', commitController.deleteCommit);

router.put('/:id', commitController.updateCommit);

module.exports = router;