function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    console.log("Pivote:", pivot);

    const left = [];
    const right = [];
    const equal = [];
    
    for (const element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    console.log("Arreglo actual:", arr);
    console.log("Menores que el pivote:", left);
    console.log("Iguales al pivote:", equal);
    console.log("Mayores que el pivote:", right);
    console.log("----------------------------------");

    return quickSort(left).concat(equal, quickSort(right));
}

const array = [9, -3, 5, 2, 6, 8, -6, 1, 3];
console.log("Arreglo original:", array);
const sortedArray = quickSort(array);
console.log("Arreglo ordenado:", sortedArray);