const mongoose = require('mongoose');

const rolesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 125
    },
    description: {
        type: String,
        required: false,
        min: 1,
        max: 355
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Roles', rolesSchema);