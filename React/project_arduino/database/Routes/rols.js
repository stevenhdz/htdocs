const express = require("express");
const RolController = require("../Controllers/rolController");
const router = express.Router();
const { validarAutenticacion } = require('../Middleware/middleware'); // Importa el middleware


const rolController = new RolController();

const id = "id_rol";

router.get("/", [validarAutenticacion], rolController.getRoles);
router.get("/:"+id, [validarAutenticacion], rolController.getRolById);
router.post("/", [validarAutenticacion], rolController.createRol);
router.post("/m", [validarAutenticacion], rolController.deleteMultipleRol);
router.put("/:"+id, [validarAutenticacion], rolController.updateRol);
router.delete("/:"+id, [validarAutenticacion], rolController.deleteRol);

module.exports = router;
