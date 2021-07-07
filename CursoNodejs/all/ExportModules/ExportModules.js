const events = require('events').EventEmitter
const util = require('util')

let Personas = function (nombre) { 
    this.nombre = nombre
 }
util.inherits(Personas, events)

module.exports = Personas