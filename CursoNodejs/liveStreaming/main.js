// Capturar el video y el audio del usuario
const constraints = { video: true, audio: true };
navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    const video = document.querySelector('#video');
    video.srcObject = stream;

    // Enviar el stream al servidor
    const socket = io();
    socket.emit('stream', stream);

    // Recibir el stream del servidor
    socket.on('stream', (stream) => {
      console.log('Nuevo stream recibido del servidor');
      video.srcObject = stream;
    });
  })
  .catch((error) => {
    console.error(error);
  });
