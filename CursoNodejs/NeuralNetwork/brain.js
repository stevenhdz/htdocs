// Importar la biblioteca Brain.js
const brain = require('brain.js');

// Crear un conjunto de datos de entrenamiento
const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

// Crear una nueva instancia de red neuronal
const net = new brain.NeuralNetwork();

// Entrenar la red neuronal con el conjunto de datos
net.train(trainingData);

// Realizar una predicción con la red neuronal
const output = net.run([0, 1]);

console.log(parseFloat(output).toFixed(0)); // [1]
