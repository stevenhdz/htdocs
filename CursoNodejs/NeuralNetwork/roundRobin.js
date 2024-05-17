const functions = [agent1, agent2, agent3]; // Arreglo con las funciones a ejecutar
const interval = 1000; // Intervalo de tiempo en milisegundos

let currentIndex = 0;

setInterval(() => {
  // Ejecuta la función actual
  const currentFn = functions[currentIndex];
  currentFn();

  // Avanza al siguiente índice
  currentIndex++;
  if (currentIndex >= functions.length) {
    currentIndex = 0;
  }
}, interval);

function agent1() {
    console.log('Hamburguesa 1');
}

function agent2() {
    console.log('Hamburguesa 2');
}

function agent3() {
    console.log('Hamburguesa 3');
}