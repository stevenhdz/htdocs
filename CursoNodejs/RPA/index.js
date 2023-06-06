const cron = require('node-cron');
const robot = require('robotjs');

let ultimoNumero = 395;


function generarNumero() {
  ultimoNumero++;
  return ultimoNumero;
}
// Definir la tarea cron para ejecutar cada 2 minutes
cron.schedule('*/2 * * * *', () => {
  // Obtener las coordenadas y realizar las acciones
  const x = 800; // Ingresa las coordenadas X del elemento
  const y = 830; // Ingresa las coordenadas Y del elemento

  // Mueve el cursor a las coordenadas del elemento y hace clic
  robot.moveMouse(x, y);
  robot.mouseClick();

  // Espera un poco para que la acción se complete
  setTimeout(() => {
    robot.typeString(`Vamos con todo a por ello, una y otra vez, superando cada desafio que se nos presente. Hasta el momento, son ${generarNumero()} victorias consecutivas y seguiremos sumando.`);
    robot.keyTap('enter');
  }, 2000); // Ajusta el tiempo de espera según sea necesario
});

