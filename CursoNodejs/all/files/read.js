const fs = require('fs')

// let files = fs.readdirSync('./')
fs.readdir('./', (error, files) => {
    if(error){
        //deje de ejecutar
        throw error
    }
    console.log(files)
    
    let archivo = fs.readFileSync('./prueba.txt', 'UTF-8')
    
    console.log('CONTENIDO')
    console.log(archivo)
})
