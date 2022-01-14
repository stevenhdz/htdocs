const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const admin = require('./routes/admin');
const verifyToken = require('./routes/validate-token');
const cors = require('cors');
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
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.8ybap.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const options =  { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(uri,options).then(() => console.log('Conectada'))
.catch(e => console.log('error', e))

//Import routes
const authRoutes = require('./routes/auth');

//route middlewares
app.use('/api/user', authRoutes);
app.use('/api/admin', verifyToken, admin);

// iniciar server 
const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>{
    console.log(`servidor en ${PORT}`)
})
