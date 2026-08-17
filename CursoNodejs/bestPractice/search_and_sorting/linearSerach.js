function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;
const index = linearSearch(array, target);
if (index !== -1) {
    console.log(`El elemento ${target} se encuentra en el índice ${index}.`);
} else {
    console.log(`El elemento ${target} no se encuentra en el arreglo.`);
}