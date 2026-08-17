const router = require('express').Router();
const userController = require('../controllers/users.controller')


router.post('/login', userController.loginUser)

router.post('/register', userController.registerUser)

module.exports = router;