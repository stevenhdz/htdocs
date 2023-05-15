const database = require("../db");
const Report = require("../Models/reports");


class ReportController {
  async getRoles(req, res) {
    try {
      const roles = await Report.findAll();
      res.json(roles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }


  //TODO: establecer ruta
  async getRoleslimit(req, res) {
    const { idUserRegisterF, idHardwareF } = req.params;
    try {
      const roles = await Report.findAll({
        where: {
          idUserRegisterF: idUserRegisterF,
          idHardwareF: idHardwareF,
        },
        order: [['id_report', 'DESC']],
        limit: 1,
      });
      res.json(roles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }


  async getRolById(req, res) {
    const id_report = req.params.id_report;
    try {
      const rol = await Report.findByPk(id_report);
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
    const {  idUsuario, id_h_v, nivel_carga  } = req.params;

    let fechaActual = new Date();
    let anio = fechaActual.getFullYear();
    let mes = ('0' + (fechaActual.getMonth() + 1)).slice(-2);
    let dia = ('0' + fechaActual.getDate()).slice(-2);

    let fecha_carga = anio + '-' + mes + '-' + dia;
    try {
      const rol = await Report.create({ fecha_carga, nivel_carga, idUserRegisterF: idUsuario, idHardwareF: id_h_v  });
      res.json(rol);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });

    }
  }

  async updateRol(req, res) {
    const id_report = req.params.id_report;
    const {  fecha_carga, nivel_carga, idUserRegisterF, idHardwareF } = req.body;
    try {
      const [result] = await Report.update({ fecha_carga, nivel_carga, idUserRegisterF, idHardwareF }, { where: { id_report } });
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
    const id_report = req.params.id_report;
    try {
      const result = await Report.destroy({ where: { id_report } });
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
      const result = await Report.destroy({ where: { id_report: ids } });
  
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

module.exports = ReportController;