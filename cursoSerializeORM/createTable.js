(async () => {
    const database = require('./db.js');
    const Produto = require('./producto.js');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();