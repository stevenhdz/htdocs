const Car = require('./default_car');

class Bmw extends Car {
  constructor() {
    super('Bmw')
  }
}

module.exports = Bmw;