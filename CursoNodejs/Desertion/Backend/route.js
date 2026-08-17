const express = require("express");
const Controller = require("./predict");
const router = express.Router();

const controllera = new Controller();

router.post("/predict", controllera.trainNeuralNetwork);
router.get("/example", controllera.Evaluate);

module.exports = router;