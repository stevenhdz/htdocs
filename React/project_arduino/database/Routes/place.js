const express = require("express");
const PlaceController = require("../Controllers/placeController");
const router = express.Router();
const { validarAutenticacion } = require('../Middleware/middleware'); // Importa el middleware


const placeController = new PlaceController();

const id = "id_place";

router.get("/", [validarAutenticacion], placeController.getRoles);
router.get("/:"+id, [validarAutenticacion], placeController.getRolById);
router.post("/", [validarAutenticacion], placeController.createRol);
router.post("/m", [validarAutenticacion], placeController.deleteMultipleRol);
router.put("/:"+id, [validarAutenticacion], placeController.updateRol);
router.delete("/:"+id, [validarAutenticacion], placeController.deleteRol);

module.exports = router;