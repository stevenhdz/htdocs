(async () => {
    const database = require("./db.js");
    const Produto = require("./producto.js");

const produto = await Produto.findByPk(2);
console.log(produto)

})();