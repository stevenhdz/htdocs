(async () => {
    const database = require("./db.js");
    const Produto = require("./producto.js");

const produtos = await Produto.findAll();
console.log(produtos);

})();