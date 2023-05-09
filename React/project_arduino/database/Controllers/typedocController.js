const database = require("../db");
const Typedoc = require("../Models/typedoc");


class TypedocController {
  async getRoles(req, res) {
    try {
      const roles = await Typedoc.findAll();
      res.json(roles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async getRolById(req, res) {
    const id_typedoc = req.params.id_typedoc;
    try {
      const rol = await Typedoc.findByPk(id_typedoc);
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
    const { description_type_doc } = req.body;
    try {
      const rol = await Typedoc.create({ description_type_doc });
      res.json(rol);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async updateRol(req, res) {
    const id_typedoc = req.params.id_typedoc;
    const { description_type_doc } = req.body;
    try {
      const [result] = await Typedoc.update({ description_type_doc }, { where: { id_typedoc } });
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
    const id_typedoc = req.params.id_typedoc;
    try {
      const result = await Typedoc.destroy({ where: { id_typedoc } });
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
      const result = await Typedoc.destroy({ where: { id_typedoc: ids } });
  
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

module.exports = TypedocController;