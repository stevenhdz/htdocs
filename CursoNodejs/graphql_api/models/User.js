const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            'Provide a valid email address'
        ]
    },
    displayName: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('User', userSchema)