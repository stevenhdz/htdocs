const { exec } = require("child_process");
const database = require("../db");
const UserRegister = require("../Models/userRegister");
const Hardware = require("../Models/hardware");
const fs = require("fs");

class BackupController {
  backupBD(req, res) {

    const nombreArchivo = `respaldo.sql`;

    const comando = `/usr/bin/mysqldump -u stevenhdz -proot FreeEnergy > ${nombreArchivo}`;

    const childProcess = exec(comando, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al realizar el respaldo: ${error.message}`);
        return;
      }

      res.json("Informe realizado");
    });

    //childProcess.on("exit", () => {
    //process.exit();
    //});

  }

  async informeUsers(req, res) {
    try {
      const data = await UserRegister.findAll();
      const csvData = data.map(row => Object.values(row.dataValues).join(','));

      const csvString = csvData.join('\n');
      fs.writeFileSync('usuarios.csv', csvString, 'utf-8');

      res.json("Informe realizado");
    } catch (error) {
      console.error('Error exporting table to CSV:', error);
    }
  }

  async informeHardware(req, res) {
    try {
      const data = await Hardware.findAll();
      const csvData = data.map(row => Object.values(row.dataValues).join(','));

      const csvString = csvData.join('\n');
      fs.writeFileSync('componentes.csv', csvString, 'utf-8')

      res.json("Informe realizado");

    } catch (error) {
      console.error('Error exporting table to CSV:', error);
    }
  }
}

module.exports = BackupController;
