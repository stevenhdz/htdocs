const express = require('express');
const app = express();

// Establecer la carpeta pública
app.use(express.static('public'));

// Iniciar el servidor
const server = app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor iniciado en el puerto 3000');
  });

// Configuración de Socket.IO
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Un nuevo usuario se ha conectado');

  // Escuchar cuando un cliente envía un stream
  socket.on('stream', (stream) => {
    console.log('Nuevo stream recibido');

    // Transmitir el stream a todos los clientes
    socket.broadcast.emit('stream', stream);
  });
});
