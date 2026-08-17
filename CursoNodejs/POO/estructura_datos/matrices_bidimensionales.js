// Crear una matriz de 2x3
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

// Acceder a elementos de la matriz
console.log(matriz[0][1]);  // Imprime el elemento en la primera fila, segunda columna

// Iterar sobre la matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}

// Modificar un elemento de la matriz
matriz[1][2] = 10;

console.log(matriz);