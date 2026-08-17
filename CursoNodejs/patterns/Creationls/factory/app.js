const CarFactory = require('./car_factory');

const Audi = CarFactory.create('Audi');
const Bmw = CarFactory.create('Bmw');
const Mercedes = CarFactory.create('Mercedes');
const Audi2 = CarFactory.create('Audi');

Audi.showInfo();
Audi2.showInfo();
Bmw.showInfo();
Mercedes.showInfo();