var preguntas = ['Hola como estas?', 'que haras?']
var respuestas = []

function pregunta(i) { 
    process.stdout.write(preguntas[i])
 }

process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim())

    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length)
    }else
    {
        process.exit()
    }
})

pregunta(0)