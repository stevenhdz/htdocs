const fs = require('fs');
//uso cuando carga mucho contenido stream
// let contenido = fs.readFileSync('./logs.log')
// console.log(`tamaño: ${contenido.length}`)

let stream = fs.createReadStream('./logs.log','UTF-8')
let data = ''

stream.once('data',()=>{
    console.log('Iniciando el stream')
})
stream.on('data', (chunk)=>{
    console.log(`${chunk.length} |`)
    data += chunk
})
stream.on('end', ()=>{
    console.log('Fin stream..\n')
    console.log(data.length)
})