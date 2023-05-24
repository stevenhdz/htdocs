const tf = require("@tensorflow/tfjs");
const { KNNClassifier } = require("@tensorflow-models/knn-classifier");
const csv = require("csv-parser");
const fs = require("fs");
const { log } = require("console");

class Controller {
  async trainNeuralNetwork(req, res) {
    try {
      const { name, alumn, id } = req.body;

      const data = [];

      fs.createReadStream("../assets/trains/datos.csv")
        .pipe(csv({ separator: ";" })) // Usar punto y coma como separador
        .on("data", (row) => {
          data.push(row);
        })
        .on("end", () => {
          log(data);
          log("Archivo CSV cargado");

          const gradeKeys = [
            "Calificacion1",
            "Calificacion2",
            "Calificacion3",
            "Calificacion4",
          ];

          const trainingData = data.map((row) => {
            const input = gradeKeys.map((key) => parseFloat(row[key]));
            input.push(row["Nivel socioeconómico"] === "Bajo" ? 1 : 0);
            input.push(
              row["Situación laboral de los padres"] === "Desempleado" ? 1 : 0
            );
            input.push(
              row["Nivel educativo de los padres"] === "Secundaria" ? 1 : 0
            );
            input.push(row["Relación con los padres"] === "Buena" ? 1 : 0);
            input.push(row["Recursos comunitarios"] === "Limitados" ? 1 : 0);
            input.push(row["Transporte"] === "Público" ? 1 : 0);
            input.push(row["Materia"] !== "" ? 1 : 0);
            input.push(row["Asistencia"] / 100);

            return {
              label: row['Desertó'] === "Sí" ? 1 : 0,
              tensor: tf.tensor(input),
            };
          });

          log('trainingData', trainingData)


          const knnClassifier = new KNNClassifier();
          trainingData.forEach((example) => {
            knnClassifier.addExample(example.tensor, example.label);
          });
          log("Clasificador KNN entrenado");

          log(
            "Ejemplos de entrenamiento:",
            knnClassifier.getClassExampleCount()
          );

          const input = alumn.map((value) => parseFloat(value));
          const example = tf.tensor1d(input);

          log("Forma del ejemplo de entrada:", example.shape);
          log("Ejemplo de entrada:", example.arraySync());

          knnClassifier
            .predictClass(example)
            .then((prediction) => {
              log("Predicción:", prediction);

              
              const resp = {
                desercion: prediction.label,
                name: name,
                id: id,
              };

              log("Respuesta:", resp);

              res.json(resp);
            })
            .catch((error) => {
              error("Error en la predicción:", error);
              res.status(500).json({ error: "Error en la predicción" });
            });
        });
    } catch (error) {
      error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
  }

  async Evaluate(req, res) {
    try {
      const data = [];

      fs.createReadStream("../assets/evaluate/datos.csv")
        .pipe(csv({ separator: ";" }))
        .on("data", (row) => {
          data.push(row);
        })
        .on("end", () => {
          res.json(data);
        });
    } catch (error) {
      error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
  }
}

module.exports = Controller;
