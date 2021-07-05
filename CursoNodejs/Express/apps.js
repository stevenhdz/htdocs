const express = require("express");
const app = express();
const port = 3000;
//middleware
app.use(express.static(__dirname + "/public"))


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/servicios", (req, res) => {
    res.send("Hello Servicios!");
  });

  app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});