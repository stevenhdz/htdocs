var fs = require("fs")
console.log("Abriendo archivo...")
var content = fs.readFile("archivo.txt","utf8", function(error,content){
    console.log(content)
})
console.log("Haciendo otra cosa")
console.log(process.uptime())