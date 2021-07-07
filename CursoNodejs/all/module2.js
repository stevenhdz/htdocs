const readline = require("readline")
const util = require("util")

let rl = readline.createInterface(process.stdin, process.stdout)

let persona =  {
    nombre: '',
    comentarios: []
}

rl.question('Cual es tu nombre? ', (respuesta) => {
    persona.nombre = respuesta
    rl.setPrompt('Dime un comentario: ')
    rl.prompt()
})

rl.on('line', (input) => {
    if(input.trim() === 'salir'){
        let men = util.format("Te llamas %s y esto me dijistes: %j", persona.nombre, persona.comentarios)
        console.log(men)
        process.exit()
    }
    persona.comentarios.push(input.trim())
    rl.setPrompt('Dime un comentario: ')
    rl.prompt()
})