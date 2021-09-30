Chart.defaults.font.family = 'Helvetica Neue';
Chart.defaults.backgroundColor = '#333';

function makeChart(players) {

  var playerLabels = players.map(function(d) {return d.Name});
  var weeksData = players.map(function(d) {return +d.Weeks});
  var playerColors = players.map(function(d) {return d.Gender === 'Female' ? '#F15F36' : '#19A0AA';});

  console.log(playerColors)
  
  var chart = new Chart('chart', {
    type: 'bar',
    data: {
      labels: playerLabels,
      datasets: [
        {
          data: weeksData,
          backgroundColor: playerColors,
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: false,
        },
        title: {
          display: true,
          text: 'Chart.js desce CSV'
        }
      }
    }
  })
}

//using D3
d3.csv('http://localhost:80/CursoJavascript/chartjsCsv/js/example.csv')
  .then(makeChart);