function searchIn2DArray(arr, target) {
    const n = arr.length;
    const m = arr[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] === target) {
                return [i, j];
            }
        }
    }
    return null; // Si no se encuentra el valor
}

// Ejemplo de uso
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const target = 8;
const result = searchIn2DArray(arr, target);
if (result) {
    console.log(`El valor ${target} se encuentra en la posición ${result}`);
} else {
    console.log(`El valor ${target} no se encuentra en el array bidimensional`);
}