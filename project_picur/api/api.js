var express = require("express");
var app = express();
var fs = require("fs");
var robot = require("robotjs");
const Say = require("say").Say;

app.get("/robot", function (req, res) {

  robot.moveMouse(1600, 60);
  setTimeout(function () {
    const say = new Say("darwin" || "win32" || "linux");
    say.speak("Hello!");
    say.stop();
    say.speak("llamando a "+req.query.rol+ "  " +req.query.name, "Monica", 0.9);

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

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
