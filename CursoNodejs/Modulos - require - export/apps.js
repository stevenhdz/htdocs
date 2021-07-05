const {frutas, dinero} = require('./frutas')

const cowsay = require('cowsay')

console.log(cowsay.say({
    text: 'Hola amigos',
    e: "oO",
    T: "U "
}))

frutas.forEach((item, puntero) =>{ console.log(item, puntero) })

console.log(dinero)