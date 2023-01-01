const mongoose = require('mongoose');

const logsSchema = mongoose.Schema({
    eventExecute: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    bodyAll: {
        type: String
    },
    responsible: {
        type: String,
        require: true,
        min: 1,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Logs', logsSchema);