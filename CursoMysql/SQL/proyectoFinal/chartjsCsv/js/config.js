Chart.defaults.font.family = "Helvetica Neue";
Chart.defaults.backgroundColor = "#333";


// se utilizo d3.js para leer el csv y chart.js para pintarlo.
function makeChart(alumnos) {
  console.log(alumnos);
  var FechaPrestamo = alumnos.map(function (d) {
    return d.FechaPrestamo;
  });
  var NumeroPrestamo = alumnos.map(function (d) {
    return +d.NumeroPrestamo;
  });

  //ternario if
  var idTipoPrestamo = alumnos.map(function (d) {
    return d.idTipoPrestamo == "1"
      ? "Prestamos de Libros " + d.FechaPrestamo
      : "Prestamos de Tesis " + d.FechaPrestamo
      ? d.idTipoPrestamo == "2"
        ? "Prestamos de Tesis " + d.FechaPrestamo
        : "Prestamo de Revistas " + d.FechaPrestamo
      : "";
  });

  console.log(FechaPrestamo);
  console.log(NumeroPrestamo);
  console.log(idTipoPrestamo);

  var chart = new Chart("chart", {
    type: "bar",
    data: {
      labels: idTipoPrestamo,
      datasets: [
        {
          data: NumeroPrestamo,
          backgroundColor: idTipoPrestamo,
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: false,
        },
        title: {
          display: true,
          text: "Cantidad de prestamos x tipoPrestamo + fecha",
        },
      },
    },
  });
}

//using D3 aca va la url con el http toca completa ya que la libreria d3 no reconoce como relativa o no relativa....
d3.csv(
  "http://localhost:80/CursoMysql/SQL/proyectoFinal/chartjsCsv/js/example.csv"
).then(makeChart);
