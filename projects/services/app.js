const express = require('express');
const methodOverride = require("method-override");
const cors = require('cors');
const morgan = require('morgan');
const https = require('https');
const fs = require('fs');
const commit = require('./routes/commit');
const log = require('./routes/logs');
const colors = require('colors');
const database = require('./database/database');
const mixins = require("./controllers/mixins.controller");
require('dotenv').config();

const app = express();

//cors
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(morgan(function (tokens, req, res) {
    return [
      'IP ->'.blue,tokens['remote-addr'](req, res),
      tokens['remote-user'](req, res),
      'METHOD ->'.blue,tokens.method(req, res),
      'URI ->'.blue,tokens.url(req, res),
      'STATUS ->'.blue,tokens.status(req, res) == 401 ? colors.red(tokens.status(req, res)) : colors.green(tokens.status(req, res)),
      'DATE ->'.blue,tokens.date(req, res),
      'MS ->'.blue,tokens['response-time'](req, res), 'ms'
    ].join(' ')
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());

//route middlewares
app.use('/api/logs', log);
app.use('/api/commit', commit);
app.use("/*?", (req, res) => mixins.result(res,req.params[0], "Invalid route", res.statusCode = 401));

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

https.createServer({
    cert: fs.readFileSync('cert/cert.pem'),
    key: fs.readFileSync('cert/key.pem'),
    ca: [fs.readFileSync('cert/csr.pem')] //array
}, app).listen(PORT, HOST, () => {
    console.log(`servidor en ${PORT}`)
});

module.exports = app;