const crypto = require('crypto');

class Sha {
  constructor(arg) {
    this.arg = arg;
  }

  get s1(){
    return crypto
      .createHash('sha1')
      .update(this.arg, 'utf8')
      .digest('hex');
  }

  get s512() {
    return crypto
      .createHash('SHA3-512')
      .update(this.arg, 'utf8')
      .digest('hex');
  }

  get s256(){
    return crypto
      .createHash('sha256')
      .update(this.arg, 'utf8')
      .digest('hex');
  }
}

module.exports = Sha;
