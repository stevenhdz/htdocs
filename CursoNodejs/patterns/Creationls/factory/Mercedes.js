const Car = require('./default_car');

class Mercedes extends Car {
  constructor() {
    super('Mercedes')
  }
}

module.exports = Mercedes;