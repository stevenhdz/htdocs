const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const admin = require('./routes/admin');
const verifyToken = require('./routes/validate-token');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
require('dotenv').config();

const app = express();


//cors 
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


//capturar body
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


//conexion bd
console.log(process.env)
const uri = `mongodb+srv://${process.env.USERS}:${process.env.PASSWORD}@cluster0.8ybap.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const options =  { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(uri,options).then(() => console.log('Conectada'))
.catch(e => console.log('error', e))

//Import routes
const authRoutes = require('./routes/auth');
const { createSecretKey } = require('crypto');

//route middlewares
app.use('/api/user', authRoutes);
app.use('/api/admin', verifyToken, admin);

// iniciar server 
const PORT = process.env.PORT || 3001;

https.createServer({
    cert: fs.readFileSync('cert/cert.pem'),
    key: fs.readFileSync('cert/key.pem'),
    ca: [fs.readFileSync('cert/csr.pem')] //array
},app).listen(PORT, () =>{
    console.log(`servidor en ${PORT}`)
})
