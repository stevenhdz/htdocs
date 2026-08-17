const database = require("../db");
const HardwarePlace = require("../Models/hardwarePlace");


class HardwarePlaceController {
  async getRoles(req, res) {
    try {
      const roles = await HardwarePlace.findAll();
      res.json(roles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async getRolById(req, res) {
    const id_h_v = req.params.id_h_v;
    try {
      const rol = await HardwarePlace.findByPk(id_h_v);
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
    const {  idHardwareF, idPlaceF } = req.body;
    try {
      const rol = await HardwarePlace.create({ idHardwareF, idPlaceF });
      res.json(rol);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async updateRol(req, res) {
    const id_h_v = req.params.id_h_v;
    const {  idHardwareF, idPlaceF } = req.body;
    try {
      const [result] = await HardwarePlace.update({  idHardwareF, idPlaceF }, { where: { id_h_v } });
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
    const id_h_v = req.params.id_h_v;
    try {
      const result = await HardwarePlace.destroy({ where: { id_h_v } });
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
      const result = await HardwarePlace.destroy({ where: { id_h_v: ids } });
  
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

module.exports = HardwarePlaceController;