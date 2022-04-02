const router = require('express').Router();
const logController = require('../controllers/logs.controller');

router.get('/', logController.findAllLogs);

router.post('/', logController.createLog);

router.get('/:id', logController.findLogById);

module.exports = router;