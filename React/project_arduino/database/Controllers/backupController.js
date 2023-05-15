const { exec } = require("child_process");

class BackupController {
  backupBD() {
    const fechaActual = new Date().toLocaleDateString().split("/").join("-");

    const nombreArchivo = `respaldo_${fechaActual}.sql`;

    const comando = `C:/xampp/mysql/bin/mysqldump.exe -u root FreeEnergy > ./Backup/${nombreArchivo}`;

    const childProcess = exec(comando, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error al realizar el respaldo: ${error.message}`);
          return;
        }
  
        console.log("Respaldo completado correctamente.");
      });
  
      childProcess.on("exit", () => {
        process.exit();
      });

  }
}

module.exports = BackupController;
