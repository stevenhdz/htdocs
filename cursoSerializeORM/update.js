(async () => {
    const database = require("./db.js");
    const Produto = require("./producto.js");

const produto = await Produto.findByPk(1);
//console.log(produto);
produto.nome = "Mouse Top";
 
const resultadoSave = await produto.save();
console.log(resultadoSave);

})();
