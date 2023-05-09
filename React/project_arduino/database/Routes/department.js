const express = require("express");
const DepartmentController = require("../Controllers/departmentController");
const router = express.Router();
const { validarAutenticacion } = require('../Middleware/middleware'); // Importa el middleware


const departmentController = new DepartmentController();

const id = "id_department";

router.get("/", [validarAutenticacion], departmentController.getRoles);
router.get("/:"+id, [validarAutenticacion], departmentController.getRolById);
router.post("/", [validarAutenticacion], departmentController.createRol);
router.post("/m", [validarAutenticacion], departmentController.deleteMultipleRol);
router.put("/:"+id, [validarAutenticacion], departmentController.updateRol);
router.delete("/:"+id, [validarAutenticacion], departmentController.deleteRol);

module.exports = router;