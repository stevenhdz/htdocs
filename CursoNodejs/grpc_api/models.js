const mongoose = require('mongoose');

const ItemModel = mongoose.model('Item', {
    id: String,
    name: String,
    description: String,
});

module.exports = { ItemModel };
