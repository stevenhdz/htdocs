const express = require("express");
const HardwarePlaceController = require("../Controllers/hardwarePlaceController");
const router = express.Router();
const { validarAutenticacion } = require('../Middleware/middleware'); // Importa el middleware


const hardwareplaceController = new HardwarePlaceController();

const id = "id_h_v";

router.get("/", [validarAutenticacion], hardwareplaceController.getRoles);
router.get("/:"+id, [validarAutenticacion], hardwareplaceController.getRolById);
router.post("/", [validarAutenticacion], hardwareplaceController.createRol);
router.post("/m", [validarAutenticacion], hardwareplaceController.deleteMultipleRol);
router.put("/:"+id, [validarAutenticacion], hardwareplaceController.updateRol);
router.delete("/:"+id, [validarAutenticacion], hardwareplaceController.deleteRol);

module.exports = router;