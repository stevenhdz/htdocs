const fs = require('fs');

const archivo = 'pruebas.txt'

if(fs.existsSync(archivo)){
    console.log('existe')
}else{
    console.log('no existe')
}

