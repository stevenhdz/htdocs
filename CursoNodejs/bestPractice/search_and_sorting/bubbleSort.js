function bubbleSort(arr) {
    const len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            console.log(arr[i], arr[i + 1])
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const array = [5, 3, 8, 4, 2];
console.log("Arreglo original:", array);
const sortedArray = bubbleSort(array);
console.log("Arreglo ordenado:", sortedArray);