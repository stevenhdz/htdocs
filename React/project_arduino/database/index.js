const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const rolRoutes = require('./Routes/rols');
const typedocRoutes = require('./Routes/typedoc');
const statusRoutes = require('./Routes/status');
const departmentsRoutes = require('./Routes/department');
const registerRoutes = require('./Routes/registers');
const hardwareRoutes = require('./Routes/hardware');
const municipalityRoutes = require('./Routes/municipality');
const placeRoutes = require('./Routes/place');
const hardwarePlaceRoutes = require('./Routes/hardwarePlace');
const reportRoutes = require('./Routes/report');
const loginRoutes = require('./Routes/login');
const cors = require('cors');
const syncModels = require('./syncModels');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/rols', rolRoutes);
app.use('/typedocs', typedocRoutes);
app.use('/status', statusRoutes);
app.use('/departments', departmentsRoutes);
app.use('/hardware', hardwareRoutes);
app.use('/municipality', municipalityRoutes);
app.use('/reports', reportRoutes);
app.use('/hardwareplaces', hardwarePlaceRoutes);
app.use('/places', placeRoutes);

async function MigrateModels() {
  await syncModels();
  console.log('Base de datos sincronizada');
}

async function ValidConnectBD() {
  await sequelize.authenticate();
  console.log('Conexion exitosa');
}

(async () => {
    try {
      await ValidConnectBD();
      await MigrateModels();

      app.listen(3000, () => {
        console.log('Servidor iniciado');
      });
      
    } catch (error) {
      console.error('Error al conectarse a la base de datos:', error);
    }
})();