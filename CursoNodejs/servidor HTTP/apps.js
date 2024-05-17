const http = require("http");

const server = http.createServer((req, res) => {
  console.log("respuesta del servidor...");
  res.end("Te envío un saludo desde el servidor con node.js 3");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("Escuchando...");
});


//Ahora visita: http://localhost:3000/    con nodemon que ejecuta hotreload