const express = require("express");
const Controller = require("./predict");
const router = express.Router();

const controllera = new Controller();

router.post("/predict", controllera.trainNeuralNetwork);

module.exports = router;