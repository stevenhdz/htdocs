let { MongoClient } = require("mongodb");
let express = require("express");
let cors = require("cors");
require("dotenv").config();
let fs = require("fs");
let https = require("https");
let bodyParser = require("body-parser");
let Say = require("say").Say;

let app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

let corsOptions = {
  origin: "*", // Reemplazar con dominio
  methods: "GET,PUT,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

let uri = `mongodb+srv://${process.env.USERS}:${process.env.PASSWORD}@cluster0.mp1sg5n.mongodb.net/?retryWrites=true&w=majority`;
let client = new MongoClient(uri);
let database = client.db("productos");

app.get("/producto/:id", function (req, res) {
  let movies = database.collection("producto");

  async function run() {
    try {
      console.log(req.params.id);
      let query = { idActual: req.params.id };
      let movie = await movies.findOne(query);
      res.json(movie);
    } finally {
    }
  }

  run().catch(console.dir);
});

app.put("/productos/edit/:id", function (req, res) {
  let producto = database.collection("producto");

  async function run() {
    try {
      let query = { idActual: req.params.id };
      let docs = {
        $set: {
          idActual: req.body.idActual,
          descripcionProducto: req.body.descripcionProducto,
          precio: req.body.precio,
          nombreDelProducto: req.body.nombreDelProducto,
        },
      };
      let movie = await producto.updateOne(query, docs, function (err, res) {
        if (err) throw err;
        console.log(" document(s) updated");
      });
    } finally {
    }
  }

  run().catch(console.dir);
});

app.post("/productos/add", function (req, res) {
  let producto = database.collection("producto");

  async function run() {
    try {
      console.log(req.body);
      let docs = {
        idActual: req.body.idActual,
        descripcionProducto: req.body.descripcionProducto,
        precio: req.body.precio,
        nombreDelProducto: req.body.nombreDelProducto,
      };
      let moviess = await producto.insertOne(docs);
      res.json(`A document was inserted: ${moviess.insertedId}`);
    } finally {
    }
  }

  run().catch(console.dir);
});

app.post("/orden/add", function (req, res) {
  let ordens = database.collection("ordens");

  async function run() {
    try {
      console.log(req.body);
      let doc = {
        caja: req.body.caja,
        productos: req.body.productos,
      };
      let orden = await ordens.insertOne(doc);
      res.json(`A document was inserted: ${orden.insertedId}`);
    } finally {
    }
  }

  run().catch(console.dir);
});

app.get("/orden/:id", function (req, res) {
  let ordens = database.collection("ordens");

  async function run() {
    try {
      console.log(parseFloat(req.params.id));
      let query = { caja: parseFloat(req.params.id) };
      let movie = await ordens.findOne(query);
      res.json(movie);
    } finally {
    }
  }

  run().catch(console.dir);
});

app.get("/speak/:info", function (req) {
  let say = new Say("darwin" || "win32" || "linux");
  say.speak("Hello!");
  say.stop();
  say.speak(req.params.info, "Mónica", 0.9);
});

const PORT = 8083 || process.env.PORT;

https
  .createServer(
    {
      cert: fs.readFileSync("cert/cert.pem"),
      key: fs.readFileSync("cert/key.pem"),
      ca: [fs.readFileSync("cert/csr.pem")], //array
    },
    app
  )
  .listen(PORT, "0.0.0.0", () => {
    console.log(`server is listening on ${PORT} port`);
  });
