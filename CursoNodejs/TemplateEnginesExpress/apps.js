const express = require("express");
const app = express();
const port = 3000;


// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.render("index", { titulo: "inicio EJS" });
});



app.use((req, res, next) => {
  res.status(404).render("404", { titulo: "Error 404" });
});

app.listen(port, () => {
 console.log('servidor en servicio', port);
})

