var express = require("express");
var app = express();
const fs = require('fs');

app.get("/boostrap", function (req, res) {
    fs.readFile('./libraries/bootstrap/bootstrap.min.css', 'utf8', function (err, data) {
        fs.writeFile('./custom.min.css', data, function (err, result) {
            if (err) console.log('error', err);
        });
        console.log(data);
    });
    fs.readFile('./libraries/bootstrap/bootstrap.min.js', 'utf8', function (err, data) {
        fs.writeFile('./custom.min.js', data, function (err, result) {
            if (err) console.log('error', err);
        });
        console.log(data);
    });
});


app.get("/default", function (req, res) {
    var data = ""
    fs.writeFile('./custom.min.css', data, function (err, result) {
        if (err) console.log('error', err);
    });

    fs.writeFile('./custom.min.js', data, function (err, result) {
        if (err) console.log('error', err);
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});