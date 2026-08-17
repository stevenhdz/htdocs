const Audi = require('./Audi');
const Bmw = require('./Bmw');
const Mercedes = require('./Mercedes');

class CarFactory {
  create(type) {
    switch (type) {
      case 'Audi':
        return new Audi();
      case 'Bmw':
        return new Bmw();
      case 'Mercedes':
        return new Mercedes();
      default:
        {
          console.log('Unknown Car type...');
        }
    }
  }
}

module.exports = new CarFactory();