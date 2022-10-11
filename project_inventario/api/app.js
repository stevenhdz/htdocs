const { MongoClient, ServerApiVersion } = require('mongodb');
var express = require("express");
var cors = require('cors');
require('dotenv').config();
const fs = require('fs')
const https = require('https');
var bodyParser = require('body-parser');
const Say = require("say").Say;


var app = express();


app.use(bodyParser.urlencoded({
    extended: true
  }));
  

  app.use(bodyParser.json())


var corsOptions = {
    origin: '*', // Reemplazar con dominio
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const uri = `mongodb+srv://${process.env.USERS}:${process.env.PASSWORD}@cluster0.mp1sg5n.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const database = client.db('productos'); // operation en caso dado

app.get("/producto/:id", function (req, res) {
    const movies = database.collection('producto');
    async function run() {
        try {
            console.log(req.params.id);
            const query = { idActual: req.params.id };
            const movie = await movies.findOne(query);
            res.json(movie)
        }  finally {
            
        }
    }
    run().catch(console.dir);
    
});

app.put("/productos/edit/:id", function (req, res) {
    const producto = database.collection('producto');
    async function run() {
        try {
            const query = { idActual: req.params.id };
            const docs = { $set: {
                idActual: req.body.idActual,
                descripcionProducto: req.body.descripcionProducto,
                precio: req.body.precio,
                nombreDelProducto: req.body.nombreDelProducto
            }
            };
                const movie = await producto.updateOne(query, docs, function(err, res) {
                    if (err) throw err;
                    console.log(" document(s) updated");
                });
        } finally {
            
        }
    }
    run().catch(console.dir);
});

app.post("/productos/add", function (req, res) {
    const producto = database.collection('producto');
    async function run() {
        try {
            console.log(req.body);
            const docs = {
                idActual: req.body.idActual,
                descripcionProducto: req.body.descripcionProducto,
                precio: req.body.precio,
                nombreDelProducto: req.body.nombreDelProducto
            }
            const moviess = await producto.insertOne(docs);
            res.json(`A document was inserted: ${moviess.insertedId}`)
        }  finally {
            
        }
    }
    run().catch(console.dir);
});

app.post("/orden/add", function (req, res) {
    const ordens = database.collection('ordens');
    async function run() {
        try {
     
            console.log(req.body);
            const doc = {
                caja: req.body.caja,
                productos: req.body.productos
            }
            const orden = await ordens.insertOne(doc);
            res.json(`A document was inserted: ${orden.insertedId}`)
        }  finally {
            
        }
    }
    run().catch(console.dir);
});

app.get("/orden/:id", function (req, res) {
    const ordens = database.collection('ordens');
    async function run() {
        try {
            console.log(parseFloat(req.params.id));
            const query = { caja: parseFloat(req.params.id) };
            const movie = await ordens.findOne(query);
            res.json(movie)
        }  finally {
            
        }
    }
    run().catch(console.dir);
});

app.get("/speak/:info", function(req, res){
    const say = new Say("darwin" || "win32" || "linux");
    say.speak("Hello!");
    say.stop();
    say.speak(req.params.info, "Monica", 0.9);
});

https.createServer({
    cert: fs.readFileSync('cert/cert.pem'),
    key: fs.readFileSync('cert/key.pem'),
    ca: [fs.readFileSync('cert/csr.pem')] //array
}, app).listen('8083','0.0.0.0',()=>{
    console.log("server is listening on 8082 port");
})

