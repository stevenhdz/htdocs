const mongoose = require('mongoose');

const commitSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    cms: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Commit', commitSchema);