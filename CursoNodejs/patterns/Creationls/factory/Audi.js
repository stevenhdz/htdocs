const Car = require('./default_car');

class Audi extends Car{
  constructor () {
    super('Audi')
  }
}

module.exports = Audi;