const express = require("express");
const MunicipalityController = require("../Controllers/municipalityController");
const router = express.Router();
const { validarAutenticacion } = require('../Middleware/middleware'); // Importa el middleware


const municipalityController = new MunicipalityController();

const id = "id_municipality";

router.get("/", [validarAutenticacion], municipalityController.getRoles);
router.get("/:"+id, [validarAutenticacion], municipalityController.getRolById);
router.post("/", [validarAutenticacion], municipalityController.createRol);
router.post("/m", [validarAutenticacion], municipalityController.deleteMultipleRol);
router.put("/:"+id, [validarAutenticacion], municipalityController.updateRol);
router.delete("/:"+id, [validarAutenticacion], municipalityController.deleteRol);

module.exports = router;