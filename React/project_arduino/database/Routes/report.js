const express = require("express");
const ReportController = require("../Controllers/reportController");
const router = express.Router();
const { validarAutenticacion } = require('../Middleware/middleware'); // Importa el middleware


const reportController = new ReportController();

const id = "id_report";

router.get("/", [validarAutenticacion], reportController.getRoles);
router.get("/:"+id, [validarAutenticacion], reportController.getRolById);
router.get("/:idUsuario/:id_h_v/:nivel_carga", [validarAutenticacion], reportController.createRol);
router.get("/:idUserRegisterF/:idHardwareF", reportController.getRoleslimit);
router.post("/m", [validarAutenticacion], reportController.deleteMultipleRol);
router.put("/:"+id, [validarAutenticacion], reportController.updateRol);
router.delete("/:"+id, [validarAutenticacion], reportController.deleteRol);

module.exports = router;