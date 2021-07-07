const child_process = require('child_process').exec

const x = 10
const y = 5

child_process(`bash ./script.sh ${x} ${y}`,(err, stdout)=>{
    if(err){
        throw err
    }
    console.log('Comando ejecutado')
    console.log(stdout)
})