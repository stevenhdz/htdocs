function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i]; // Elemento actual que se va a insertar en su lugar correcto
        let j = i - 1; // Índice del elemento anterior al elemento actual

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
        console.log(`Paso ${i}: ${arr}`);
    }
    return arr;
}

const array = [9, -3, 5, 2, 6, 8, -6, 1, 3];
console.log("Arreglo original:", array);
const sortedArray = insertionSort(array);
console.log("Arreglo ordenado:", sortedArray);