const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const screenshot = require('desktop-screenshot');

// configurar directorio estático
app.use(express.static(__dirname + '/'));

// manejar solicitudes GET
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// manejar conexiones de socket.io
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // capturar y enviar la captura de pantalla
  socket.on('screenshot', () => {
    screenshot("screenshot.png", (error, complete) => {
      if (error) {
        console.log("No se pudo capturar la pantalla: ", error);
      } else {
        console.log("Captura de pantalla exitosa");
        socket.emit('screenshot', 'screenshot.png');
      }
    });
  });

  // manejar desconexiones de socket.io
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// iniciar el servidor
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
