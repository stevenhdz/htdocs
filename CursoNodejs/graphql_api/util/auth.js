const jwt = require("jsonwebtoken")

const createJWTToken = (user) => {
    return jwt.sign({ user }, 'secrethello', {
        expiresIn: '1h'
    })
}

module.exports = {
    createJWTToken
}