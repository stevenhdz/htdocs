const database = require("../db");
const Rol = require("../Models/rol");


class RolController {
  async getRoles(req, res) {
    try {
      const roles = await Rol.findAll();
      res.json(roles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async getRolById(req, res) {
    const id_rol = req.params.id_rol;
    try {
      const rol = await Rol.findByPk(id_rol);
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
    const { description_rol } = req.body;
    try {
      const rol = await Rol.create({ description_rol });
      res.json(rol);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async updateRol(req, res) {
    const id_rol = req.params.id_rol;
    const { description_rol } = req.body;
    try {
      const [result] = await Rol.update({ description_rol }, { where: { id_rol } });
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
    const id_rol = req.params.id_rol;
    try {
      const result = await Rol.destroy({ where: { id_rol } });
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
      const result = await Rol.destroy({ where: { id_rol: ids } });
  
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

module.exports = RolController;