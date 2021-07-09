const fs = require('fs');

//fs.mkdirSync('img')

// fs.mkdir('css', function (err) {
//     if(err) throw('error' + err)
//     console.log('Creada')
//   })

if(fs.existsSync('css')){
    console.log('ya existe')
}else{
    fs.mkdir('css', function (err) {
    if(err) throw('error' + err)
    console.log('Creada')
  })
}