(async () => {
    const database = require('./db.js');
    const Produto = require('./producto.js');
//assim
Produto.destroy({ where: { id: 1 }});
 
//ou assim
const produto = await Produto.findByPk(1);
produto.destroy();

})();