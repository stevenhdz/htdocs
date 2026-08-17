// Importar la biblioteca TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Crear un modelo secuencial
const model = tf.sequential();

// Agregar una capa densa con 2 entradas y 1 salida
model.add(tf.layers.dense({inputShape: [2], units: 1, activation: 'sigmoid'}));

// Compilar el modelo
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Crear un conjunto de datos de entrenamiento
const xs = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]]);
const ys = tf.tensor2d([[0], [1], [1], [0]]);

// Entrenar el modelo con el conjunto de datos
model.fit(xs, ys, {epochs: 1000})
  .then(() => {
    // Realizar una predicción con el modelo
    const output = model.predict(tf.tensor2d([[0, 1]]));
    console.log(parseFloat(output.dataSync()).toFixed(0)); // [1]
  });
