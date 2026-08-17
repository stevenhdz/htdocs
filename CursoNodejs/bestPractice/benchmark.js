function determinarAccionConSwitch(codigoOperacion) {
    let accion;
    switch (codigoOperacion) {
        case 'A':
            accion = 'Hacer algo para la operación A';
            break;
        case 'B':
            accion = 'Hacer algo para la operación B';
            break;
        case 'C':
            accion = 'Hacer algo para la operación C';
            break;
        default:
            accion = 'No se reconoce la operación';
    }
    return accion;
}

// Función que utiliza un conjunto de if-else para determinar la acción
function determinarAccionConIfElse(codigoOperacion) {
    let accion;
    if (codigoOperacion === 'A') {
        accion = 'Hacer algo para la operación A';
    } else if (codigoOperacion === 'B') {
        accion = 'Hacer algo para la operación B';
    } else if (codigoOperacion === 'C') {
        accion = 'Hacer algo para la operación C';
    } else {
        accion = 'No se reconoce la operación';
    }
    return accion;
}

// Medir el tiempo de ejecución de cada función
console.time('switch');
for (let i = 0; i < 10000000; i++) {
    determinarAccionConSwitch('B'); // Llamada a la función con un código de operación
}
console.timeEnd('switch');

console.time('if-else');
for (let i = 0; i < 10000000; i++) {
    determinarAccionConIfElse('B'); // Llamada a la función con un código de operación
}
console.timeEnd('if-else');