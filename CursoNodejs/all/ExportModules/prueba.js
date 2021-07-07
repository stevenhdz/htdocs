const personas = require('./ExportModules');

let per = new personas('Alex');

per.on('hablar', (mensaje) => {
    console.log(`${per.nombre}: ${mensaje}`)
})

per.emit('hablar', 'hoy es un gran dia')

