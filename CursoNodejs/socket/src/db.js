const mongoose = require('mongoose');
import './config';

export const connectDB = async () => {
    const uri = `mongodb+srv://${process.env.USERS}:${process.env.PASSWORD}@cluster0.z10b6sg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(uri, options).then(() => console.log('Conectada'))
        .catch(e => console.log('error', e))
};