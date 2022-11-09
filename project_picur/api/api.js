let { MongoClient } = require("mongodb");
let express = require("express");
let cors = require("cors");
var fs = require("fs");
var robot = require("robotjs");
let https = require("https");
let bodyParser = require("body-parser");
const Say = require("say").Say;

let app = express();

require("dotenv").config();

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
console.log(uri);
let client = new MongoClient(uri);
let database = client.db("productos");

app.get("/robot", function (req, res) {
  robot.moveMouse(1600, 60);
  setTimeout(function () {
    const say = new Say("darwin" || "win32" || "linux");
    say.speak("Hello!");
    say.stop();
    say.speak(
      "llamando a " + req.query.rol + "  " + req.query.name,
      "Monica",
      0.9
    );

    setTimeout(function () {
      robot.mouseClick();
    }, 3000);
  }, 2000);

  setTimeout(function () {
    robot.moveMouse(1600, 970);

    setTimeout(function () {
      robot.mouseClick();
    }, 2000);
    setTimeout(function () {
      robot.mouseClick();
    }, 2000);
  }, 7000);

  setTimeout(function () {
    robot.moveMouse(1631, 133);

    setTimeout(function () {
      robot.mouseClick();
    }, 2000);
  }, 9000);
});

app.get("/client/list", function (req, res) {
  let movies = database.collection("client");

  async function run() {
    try {
      let query = { rol: { $ne: "paciente" } };
      let movie = await movies.find(query).toArray();
      res.json(movie);
    } finally {
    }
  }

  run().catch(console.dir);
});

app.get("/client/list/:rol", function (req, res) {
  let movies = database.collection("client");

  async function run() {
    try {
      let query = { rol: req.params.rol };
      let movie = await movies.findOne(query);
      res.json(movie);
    } finally {
    }
  }

  run().catch(console.dir);
});
app.post("/client/add", function (req, res) {
  let ordens = database.collection("client");

  async function run() {
    try {
      console.log(req.body);

      let doc = {
        year: req.body.year,
        group: req.body.group,
        id: req.body.id,
        image: req.body.image,
        names: req.body.names,
        rol: req.body.rol,
        history: req.body.history,
        contacts: req.body.contacts,
        email: req.body.email,
        entity: req.body.entity,
        parent: req.body.parent,
        custom: req.body.custom,
      };

      let orden = await ordens.insertOne(doc);
      res.json(`A document was inserted: ${orden.insertedId}`);
    } finally {
    }
  }

  run().catch(console.dir);
});
app.put("/client/edit/:id", function (req, res) {
  let producto = database.collection("client");

  async function run() {
    try {
      let query = { id: req.params.id };
      let docs = {
        $set: {
          year: req.body.year,
          group: req.body.group,
          image: req.body.image,
          names: req.body.names,
          rol: req.body.rol,
          history: req.body.history,
          contacts: req.body.contacts,
          email: req.body.email,
          entity: req.body.entity,
          parent: req.body.parent,
          custom: req.body.custom,
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
app.delete("/client/delete/:id", function (req, res) {
  let movies = database.collection("client");

  async function run() {
    try {
      console.log(req.params.id);
      let query = { id: req.params.id };
      let movie = await movies.deleteOne(query);
      res.json(movie);
    } finally {
    }
  }

  run().catch(console.dir);
});

app.get("/msg/:id", function (req, res) {
  let movies = database.collection("contacts");

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
app.post("/msg", function (req, res) {});
app.put("/msg", function (req, res) {});

const PORT = 3000 || process.env.PORT;

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
