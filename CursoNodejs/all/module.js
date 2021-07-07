const path = require("path")
const util = require("util")
const v8 = require("v8")
// console.log(path.join(__dirname, 'www', 'home'))
let nombre = "Alex"
let edad = 25
let texto = util.format("Hola %s, tienes %d años", nombre, edad)

console.log(texto)

console.log(v8.getHeapStatistics())