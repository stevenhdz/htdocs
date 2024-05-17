const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (respuesta) => {
    console.log(`Hola, ${respuesta}!`);
    rl.close();
});