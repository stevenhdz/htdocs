const router = require('express').Router();
const roleController = require('../controllers/roles.controller');

router.get('/', roleController.findAllRoles);

router.post('/', roleController.createRole);

router.get('/:id', roleController.findRoleById);

router.delete('/:id', roleController.deleteRole);

router.put('/:id', roleController.updateRole);

module.exports = router;