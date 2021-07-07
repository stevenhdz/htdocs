const events = require('events').EventEmitter
const util = require('util')

let Persona = function (nombre) { 
    this.nombre = nombre
 }
util.inherits(Persona, events)

 let persona = new Persona('Alex');

//  console.log(`Me llamo ${persona.nombre}`)

persona.on('hablar', (mensaje) => {
    console.log(`${persona.nombre}: ${mensaje}`)
})
//callback
// emitter.on('eventoCustom', (mensaje, estatus)=>{
//     console.log(`${estatus}:  ${mensaje}`)
// })

persona.emit('hablar', 'hoy es un gran dia')

// emitter.emit('eventoCustom', 'MENSAJE CARGADO CON EXITO', 200)