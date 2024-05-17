/**
 * 
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */
function binarySearch(arr, target) {
    let left = 0; //position initial
    let right = arr.length - 1; //position final 

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; //mid
        } else if (arr[mid] > target) {
            right = mid - 1; //left
        } else {
            left = mid + 1; //right
        }
    }

    return -1;
}

const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 9;
const index = binarySearch(array, target);

if (index !== -1) {
    console.log(`El elemento ${target} se encuentra en el índice ${index}.`);
} else {
    console.log(`El elemento ${target} no se encuentra en el arreglo.`);
}