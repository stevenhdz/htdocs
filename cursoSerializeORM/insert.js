(async () => {
  const database = require("./db.js");
  const Produto = require("./producto.js");

  const resultadoCreate = await Produto.create({
    nome: "mouse 2",
    preco: 10,
    descricao: "Um mouse USB bonitão",
  });
  console.log(resultadoCreate);
})();
