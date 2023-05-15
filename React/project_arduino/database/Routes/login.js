const express = require("express");
const UserLoginController = require("../controllers/loginController");
const router = express.Router();

const userLoginController = new UserLoginController();

router.get("/", userLoginController.getAllUsers);
router.post("/auth", userLoginController.getUserById);
router.post("/user", userLoginController.getUserByIds);
router.post("/", userLoginController.createUser);
router.post("/m", userLoginController.deleteMultiple);
router.put("/:id_credentials", userLoginController.updateUser);
router.delete("/:id_credentials", userLoginController.deleteUser);

module.exports = router;
