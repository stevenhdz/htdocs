(async () => {
    const database = require("./db.js");
    const Produto = require("./producto.js");

let id = process.argv[2]
const produto = await Produto.findByPk(id);
console.log(produto)

})();