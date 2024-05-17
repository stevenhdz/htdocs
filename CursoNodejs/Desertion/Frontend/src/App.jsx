import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [cedula, setCedula] = useState("");
  const [name, setName] = useState("");
  const [alumn, setAlumn] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    evaluate();
  }, []);

  const evaluate = async () => {
    try {
      const response = await fetch("http://localhost:3002/predict/example");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedAlumn = data.find((item) => item.Cedula === cedula);

    if (selectedAlumn) {
      setAlumn(selectedAlumn);
      setName(selectedAlumn.Nombre);
    } else {
      setAlumn(null);
      setName(null);
    }

    if (alumn !== "") {
      const gradeKeys = [
        "Calificacion1",
        "Calificacion2",
        "Calificacion3",
        "Calificacion4",
      ];
      const input = gradeKeys.map((key) => parseFloat(alumn[key]));
      input.push(alumn["Nivel socioeconómico"] === "Bajo" ? 1 : 0);
      input.push(
        alumn["Situación laboral de los padres"] === "Desempleado" ? 1 : 0
      );
      input.push(
        alumn["Nivel educativo de los padres"] === "Secundaria" ? 1 : 0
      );
      input.push(alumn["Relación con los padres"] === "Buena" ? 1 : 0);
      input.push(alumn["Recursos comunitarios"] === "Limitados" ? 1 : 0);
      input.push(alumn["Transporte"] === "Público" ? 1 : 0);
      input.push(alumn["Materia"] !== "" ? 1 : 0);
      input.push(alumn["Asistencia"] / 100);

      let formatData = {
        id: cedula,
        name: name,
        alumn: input,
      };

      console.log("formdata:", formatData);

      try {
        const res = await fetch("http://localhost:3002/predict/predict", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(formatData),
        });
        const data = await res.json();
        console.log(data);
        setResponse(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {}, [alumn]);

  useEffect(() => {}, [name]);

  return (
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="display-4 mb-4">
            Predicción de deserción estudiantil
          </h1>
          <div className="form-group">
            <label htmlFor="cedula">Seleccione el documento del alumno:</label>
            <select
              className="form-control"
              name="cedula"
              id="cedula"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
            >
              <option value="">Seleccione el documento del alumno:</option>
              {data.map((item, index) => (
                <option key={index} value={item.Cedula}>
                  {item.Cedula}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary mt-3" type="submit">
            Predecir
          </button>

          {response.desercion && (
            <div className="mt-4">
              <h3>Resultados de la predicción:</h3>
              <p
                className={`lead ${
                  response.desercion === "1" ? "text-danger" : "text-success"
                }`}
              >
                El estudiante puede desertar: {response.desercion}
              </p>
              <p>Nombre del estudiante: {response.name}</p>
              <p>Identificación del estudiante: {response.id}</p>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
