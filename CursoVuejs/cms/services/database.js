const mongoose = require('mongoose');
require('dotenv').config({ path: "./.env" });

mongoose.set('strictQuery', true);

(async () => {
    console.log(process.env.USERS)
    const uri = `mongodb+srv://${process.env.USERS}:${process.env.PASSWORD}@cluster0.xbfbi93.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(uri, options).then(() => console.log('Conectada'))
        .catch(e => console.log('error', e))
})();