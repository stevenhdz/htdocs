const brain = require("brain.js");
const csv = require("csv-parser");
const fs = require("fs");


class Controller {
    trainNeuralNetwork(req, res) {
      try {
        const { name, alumn, id } = req.body;
    
        const data = [];
    
        fs.createReadStream("../assets/trains/datos.csv")
          .pipe(csv({ separator: ";" })) // Usar tabulador como separador
          .on("data", (row) => {
            data.push(row);
          })
          .on("end", () => {
            console.log("Archivo CSV cargado");
    
            const gradeKeys = [
              "Calificacion1",
              "Calificacion2",
              "Calificacion3",
              "Calificacion4",
            ];
            const trainingData = data.map((row) => {
              const input = gradeKeys.map((key) => row[key]);
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
                input,
                output: [row.Desertó === "Sí" ? 1 : 0],
              };
            });
    
            const net = new brain.NeuralNetwork();
            net.train(trainingData);
            console.log("Red neuronal entrenada");
    
            //[5, 5, 5, 5, 1, 1, 1, 0, 1, 1, 1, 0.12]
            const input = alumn;
            const output = net.run(input);
            console.log("Predicción: ");

            const resp = {"desercion": Math.round(parseFloat(output)), "name": name, "id": id}

            console.log(resp)
    
            res.json(resp);
          });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error en el servidor" });
      }
    }
}

module.exports = Controller;