/* LSTM (Long Short-Term Memory) es un tipo de red neuronal recurrente que se utiliza para procesar datos secuenciales, como el lenguaje natural y las series de tiempo. Se diferencia de las redes neuronales recurrentes tradicionales en que tiene una estructura de memoria interna que le permite recordar información durante largos períodos de tiempo.

La estructura de memoria interna se compone de "celdas" que pueden almacenar información durante un período de tiempo y una serie de "puertas" que regulan la información que fluye dentro y fuera de la celda. Las puertas están diseñadas para proteger la memoria interna de las entradas irrelevantes y los valores de salida no deseados.

La arquitectura LSTM es especialmente útil para tareas que involucran secuencias de entrada largas, como la traducción de lenguaje natural o la generación de texto, ya que puede recordar información relevante de la secuencia de entrada y usarla en el futuro. También se utiliza en la detección de anomalías y la predicción de series de tiempo.
 */

const brain = require('brain.js');

// Define the training data
const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

// Create the LSTM neural network
const net = new brain.recurrent.LSTM();

// Train the network
net.train(trainingData, {
  iterations: 1500,
  errorThresh: 0.005
});

// Test the network
console.log(net.run([0, 0])); // Expected output: [0]
console.log(net.run([0, 1])); // Expected output: [1]
console.log(net.run([1, 0])); // Expected output: [1]
console.log(net.run([1, 1])); // Expected output: [0]
