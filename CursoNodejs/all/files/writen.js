const fs = require('fs');

const archivo = 'prueba.txt'

const contenido = 'Este es el contenido'

// fs.writeFile(archivo, contenido, (err2){
//     if(err2) throw('error')
//     console.log('se escribio')
// })

const textAditional = 'nueva'
    fs.appendFile(archivo, textAditional, (err3)=>{
        if(err3) throw('no se puede adjuntar mas texto')
        console.log('se adjunto info')
    })