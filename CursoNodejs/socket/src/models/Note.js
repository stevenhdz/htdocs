const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    description: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Note', noteSchema);