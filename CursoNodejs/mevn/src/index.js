const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express()

var corsOptions = {
    origin: '*', // Reemplazar con dominio
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

//console.log(process.env.USERS)
const uri = `mongodb+srv://${process.env.USERS}:${process.env.PASSWORD}@cluster0.8ybap.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

mongoose.connect(uri, options)
    .then(() => console.log('data base started'))
    .catch(e => console.log('error', e))

//settings
app.set('port', process.env.PORT || 3000)
//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//routes
app.use('/tasks',require('./routes/tasks'))
//Static files
app.use(express.static(__dirname + '/public' || './public'))
//server listening
app.listen(app.get('port'),() => {
    console.log(`Server started ${app.get('port')}`)
})