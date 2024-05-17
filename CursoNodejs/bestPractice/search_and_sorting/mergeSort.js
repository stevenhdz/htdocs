function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Divide el arreglo en dos mitades
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    console.log("Dividiendo en:", left, right);

    // Ordena recursivamente las dos mitades
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // Combina las dos mitades ordenadas
    console.log("Combinando:", leftSorted, rightSorted);
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Combina los elementos ordenados de left y right en result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Agrega los elementos restantes de left (si hay alguno)
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Agrega los elementos restantes de right (si hay alguno)
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Ejemplo de uso
const array = [9, -3, 5, 2, 6, 8, -6, 1, 3];
console.log("Arreglo original:", array);
const sortedArray = mergeSort(array);
console.log("Arreglo ordenado:", sortedArray);