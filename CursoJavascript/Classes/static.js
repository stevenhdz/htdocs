class Car {
    constructor(brand) {
      this.carname = brand;
    }
    static hello() {  // static method
      return "Hello!!";
    }
  }
  
  let mycar = new Car("Ford");

  Car.hello();