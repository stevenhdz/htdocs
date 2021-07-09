const fs = require('fs');

// fs.renameSync('./prueba1.txt', './prueba.txt')

// fs.rename('./prueba.txt', './prueba1.txt', function (param) {
//     if(param) throw(param)

//     console.log('renombrado')
//   })


//   fs.rename('./prueba1.txt', './src/prueba1.txt', function (param) {
//     if(param) throw(param)

//     console.log('movido')
//   })

  fs.unlinkSync('./src/prueba1.txt')
  console.log('eliminado')

