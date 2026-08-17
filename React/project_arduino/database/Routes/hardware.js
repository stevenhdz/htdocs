const express = require("express");
const HardwareController = require("../Controllers/hardwareController");
const router = express.Router();
const { validarAutenticacion } = require('../Middleware/middleware'); // Importa el middleware


const hardwareController = new HardwareController();

const id = "id_hardware";

router.get("/", [validarAutenticacion], hardwareController.getRoles);
router.get("/:"+id, [validarAutenticacion], hardwareController.getRolById);
router.post("/", [validarAutenticacion], hardwareController.createRol);
router.post("/m", [validarAutenticacion], hardwareController.deleteMultipleRol);
router.put("/:"+id, [validarAutenticacion], hardwareController.updateRol);
router.delete("/:"+id, [validarAutenticacion], hardwareController.deleteRol);

module.exports = router;