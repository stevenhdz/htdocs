const express = require("express");
const TypedocController = require("../Controllers/typedocController");
const router = express.Router();
const { validarAutenticacion } = require('../Middleware/middleware'); // Importa el middleware


const typedocController = new TypedocController();

const id = "id_typedoc";

router.get("/" , [validarAutenticacion], typedocController.getRoles);
router.get("/:" + id , [validarAutenticacion], typedocController.getRolById);
router.post("/" , [validarAutenticacion], typedocController.createRol);
router.post("/m" , [validarAutenticacion], typedocController.deleteMultipleRol);
router.put("/:" + id , [validarAutenticacion], typedocController.updateRol);
router.delete("/:" + id , [validarAutenticacion], typedocController.deleteRol);

module.exports = router;
