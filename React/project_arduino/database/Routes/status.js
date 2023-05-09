const express = require("express");
const StatusController = require("../Controllers/statusController");
const router = express.Router();
const { validarAutenticacion } = require('../Middleware/middleware'); // Importa el middleware


const rolController = new StatusController();

const id = "id_status";

router.get("/" , [validarAutenticacion], rolController.getRoles);
router.get("/:" + id , [validarAutenticacion], rolController.getRolById);
router.post("/" , [validarAutenticacion], rolController.createRol);
router.post("/m" , [validarAutenticacion], rolController.deleteMultipleRol);
router.put("/:" + id , [validarAutenticacion], rolController.updateRol);
router.delete("/:" + id , [validarAutenticacion], rolController.deleteRol);

module.exports = router;
