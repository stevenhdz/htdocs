const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const uri = `mongodb+srv://${process.env.USERS}:${process.env.PASSWORD}@cluster0.z10b6sg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
    await mongoose.connect(uri)
    console.log('connect')
}

module.exports = { connectDB }