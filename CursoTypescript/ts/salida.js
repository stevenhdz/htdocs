"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rest = void 0;
/* variables */
var message = "Hola mundo";
console.log(message);
var titulo = "Hola";
console.log(titulo);
var loteria = 2;
console.log(loteria);
var n = null;
console.log(n);
var u = undefined;
console.log(u);
var autorizacion = true;
console.log(autorizacion);
var value = "Hello";
value = 42;
console.log(value);
var numbers = [1, 2, 3];
console.log(numbers);
var mixed = [2, true, "hola"];
console.log(mixed);
var mixed2 = [2, true, ["hola"]];
console.log(mixed2);
var players = {
    10: "Messi",
    7: "ronaldo"
};
console.log(players);
var countries = {
    "10": "Messi",
    "7": "ronaldo"
};
console.log(countries);
var countries2 = {
    "10": ["Messi"],
    "7": ["ronaldo"]
};
console.log(countries2);
var pi = 3.1416;
console.log(pi);
var obj = { a: 42, b: "Hello" };
console.log(obj);
var add = function (a, b) { return a + b; };
console.log('types functions', add);
/* type assertions */
var val = "This is a string";
var strLen = val.length;
console.log('strlen', strLen);
/* Genrics */
function identity(arg) {
    return arg;
}
var num = identity(42);
var str = identity("Hello");
console.log('generic', num);
/* operadores */
console.log(1 + 1);
console.log(1 - 1);
console.log(10 * 2);
console.log(10 / 2);
/* operadores comparativos */
console.log(4 == 4);
console.log(4 < 5);
console.log(4 >= 5);
/* operadores logicos */
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
/* condicionales */
if (autorizacion) {
    console.log('puede');
}
else if (typeof autorizacion == undefined) {
    console.log('puede pero');
}
else {
    console.log('no puede');
}
switch (titulo) {
    case 'Hola':
        console.log('switch', titulo);
        break;
    /*    case 'hola2':
           console.log('switch', titulo)
           break; */
    default:
        break;
}
/* functions */
function sum(number1, number2) {
    return number1 + number2;
}
var result = sum(3, 4);
console.log(result);
function mult(number1, number2) {
    console.log(number1 * number2);
}
mult(3, 3);
function imprimirPE(list) {
    console.log(list[0]);
}
var animals = ['leon', 'leona'];
imprimirPE(animals);
/* bucles o loops */
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("for:", animal);
}
while (loteria <= 7) {
    console.log("while:", loteria);
    loteria++;
}
do {
    console.log("do:", loteria);
} while (loteria < 7);
var javascript = {
    nombre: 'Javascript',
    año: 2023,
    descripcion: function () { console.log("hola desde interface, ".concat(this.nombre, " fue creado en ").concat(this.año)); }
};
javascript.descripcion();
// Define the Language class that implements Lang
var Language = /** @class */ (function () {
    function Language(nombre, año) {
        this.nombre = nombre;
        this.año = año;
    }
    Language.prototype.descripcion = function () { console.log("hola desde class, ".concat(this.nombre, " fue creado en ").concat(this.año)); };
    return Language;
}());
// Create instances of Language
var html = new Language('html', 2023);
html.descripcion();
var css = new Language('css', 2023);
css.descripcion();
/* enums */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
console.log('enum:', color);
/* exceptions control */
try {
    var jsonData = '{"name": "John", "age": 30}';
    var parsedData = JSON.parse(jsonData);
    var name_1 = parsedData.name, age = parsedData.age, email = parsedData.email;
    console.log("Nombre: ".concat(name_1, ", Edad: ").concat(age, ", Email: ").concat(email));
}
catch (error) {
    console.error('Se ha producido un error:', error.message);
}
finally {
    console.log('Bloque finally ejecutado.');
}
console.log('El programa continúa después del bloque try...catch.');
/* modules */
function rest(a, b) {
    console.log('rest:', a - b);
}
exports.rest = rest;
