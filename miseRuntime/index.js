const http = require("http");

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "app";
const NODE_ENV = process.env.NODE_ENV || "development";
const API_URL = process.env.API_URL || "http://localhost:3000";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      ok: true,
      app: APP_NAME,
      env: NODE_ENV,
      port: PORT,
      apiUrl: API_URL,
      node: process.version
    })
  );
});

server.listen(PORT, () => {
  console.log(`🚀 ${APP_NAME} corriendo en ${API_URL}`);
  console.log(`🌱 NODE_ENV=${NODE_ENV}`);
  console.log(`🟢 Node=${process.version}`);
});