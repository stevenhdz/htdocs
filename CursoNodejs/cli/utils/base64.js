class Base64 {
    constructor(arg) {
        this.arg = arg
    }

    get decode() {
        return Buffer.from(this.arg, 'base64').toString('utf8')
    }

    get encode() {
        return Buffer.from(this.arg, 'utf8').toString('base64')
    }
}

module.exports = Base64;