/* let array = { apple: "This is an apple.", banana: "This is a banana." };
let selected = "d";

if (array[selected]) {
  console.log(array[selected]);
} else if (array.apple && selected === 'apple') {
  console.log(array.apple);
} else if (array.banana && selected === 'banana') {
  console.log(array.banana);
} else {
  console.log(`No existe una clave "${selected}" en el objeto.`);
} */


/* let array = { apple: "This is an apple.", banana: "This is a banana." };
let selected = "d";
let found = false;
Object.keys(array).forEach((element) => {
  if (element == selected) {
    console.log(array[element]);
    found = true;
  }
});
if (!found) {
  console.log(`No existe una clave "${selected}" en el objeto.`);
}
 */




/* let array = { apple: "This is an apple.", banana: "This is a banana." };
let selected = "d";
let found = false;
for (let key in array) {
  if (key === selected) {
    console.log(array[key]);
    found = true;
    break; // detiene la búsqueda tan pronto como se encuentra la clave
  }
}
if (!found) {
  console.log(`No existe una clave "${selected}" en el objeto.`);
} */


/* const array = { apple: "This is an apple.", banana: "This is a banana." };
const selected = "apple";

switch (selected) {
  case "apple":
    console.log(array[selected]);
    break;
  case "banana":
    console.log(array[selected]);
    break;
  default:
    console.log("invalid");
} */

/* const array = { apple: "This is an apple.", banana: "This is a banana." };
const selected = "apple";
if (selected in array) {
  console.log(array[selected]);
} else {
  console.log("invalid");
} */

const puntaje = 90
const calificaciones = [
  { rango: 90, calificacion: "A" },
  { rango: 80, calificacion: "B" },
  { rango: 70, calificacion: "C" },
  { rango: 60, calificacion: "D" }
];

let calificacion = calificaciones.reduceRight((acc, curr) => puntaje >= curr.rango ? curr.calificacion : acc, "F");

console.log("La calificación del estudiante es: " + calificacion);