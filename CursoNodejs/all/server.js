const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('Hola Mundo')
}).listen(3000)

console.log('iniciado')