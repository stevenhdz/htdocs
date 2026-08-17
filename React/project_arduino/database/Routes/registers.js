const express = require("express");
const UserRegisterController = require("../Controllers/registerController");
const router = express.Router();

const userRegisterController = new UserRegisterController();

router.get("/", userRegisterController.getAllUsers);
router.get("/:id_user", userRegisterController.getUserById);
router.get("/doc/:number_doc", userRegisterController.getUserByDoc);
router.post("/m", userRegisterController.deleteMultiple);
router.post("/", userRegisterController.createUser);
router.put("/:id_user", userRegisterController.updateUser);
router.delete("/:id_user", userRegisterController.deleteUser);

module.exports = router;