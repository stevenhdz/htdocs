const database = require("../db");
const Department = require("../Models/department");


class DepartmentController {
  async getRoles(req, res) {
    try {
      const roles = await Department.findAll();
      res.json(roles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async getRolById(req, res) {
    const id_department = req.params.id_department;
    try {
      const rol = await Department.findByPk(id_department);
      if (rol) {
        res.json(rol);
      } else {
        res.status(404).json({ error: "Rol no encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
  }

  async createRol(req, res) {
    const { desc_department } = req.body;
    try {
      const rol = await Department.create({ desc_department });
      res.json(rol);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async updateRol(req, res) {
    const id_department = req.params.id_department;
    const { desc_department } = req.body;
    try {
      const [result] = await Department.update({ desc_department }, { where: { id_department } });
      if (result == 0) {
        res.status(404).json({ error: "Rol no encontrado" });
      } else {
        res.status(201).json({ message: "Rol actualizado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async deleteRol(req, res) {
    const id_department = req.params.id_department;
    try {
      const result = await Department.destroy({ where: { id_department } });
      if (result == 0) {
        res.status(404).json({ error: "Rol no encontrado" });
      } else {
        res.status(201).json({ message: "Rol eliminado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async deleteMultipleRol(req, res) {
    try {
      const ids = req.body;
      const result = await Department.destroy({ where: { id_department: ids } });
  
      if (result == 0) {
        res.status(404).json({ error: "Roles no encontrados" });
      } else {
        res.status(201).json({ message: "Roles eliminados" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
  }

}

module.exports = DepartmentController;