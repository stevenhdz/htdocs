function multiplicarMatrices(matrizA, matrizB) {
    const resultado = [];

    for (let i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matrizB[0].length; j++) {
            resultado[i][j] = 0;
            for (let k = 0; k < matrizA[0].length; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return resultado;
}

const matrizA = [
    [1, 2],
    [3, 4]
];

const matrizB = [
    [5, 6],
    [7, 8]
];

const resultadoMultiplicacion = multiplicarMatrices(matrizA, matrizB);
console.log(resultadoMultiplicacion);