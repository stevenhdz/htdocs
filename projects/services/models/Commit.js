const mongoose = require('mongoose');

const commitSchema = mongoose.Schema({
    responsible: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    commit: {
        type: String,
        min: 1,
        max: 255
    },
    idCharacter: {
        type: String,
        min: 1,
        max: 255
    },
    nameCharacter: {
        type: String,
        min: 1,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Commit', commitSchema);