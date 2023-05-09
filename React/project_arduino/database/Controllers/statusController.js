const database = require("../db");
const Status = require("../Models/status");


class StatusController {
  async getRoles(req, res) {
    try {
      const roles = await Status.findAll();
      res.json(roles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async getRolById(req, res) {
    const id_status = req.params.id_status;
    try {
      const rol = await Status.findByPk(id_status);
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
    const { description_status } = req.body;
    try {
      const rol = await Status.create({ description_status });
      res.json(rol);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async updateRol(req, res) {
    const id_status = req.params.id_status;
    const { description_status } = req.body;
    try {
      const [result] = await Status.update({ description_status }, { where: { id_status } });
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
    const id_status = req.params.id_status;
    try {
      const result = await Status.destroy({ where: { id_status } });
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
      const result = await Status.destroy({ where: { id_status: ids } });
  
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

module.exports = StatusController;