/*

  Coding Challenge #4

  Your tasks:
    1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
    child class of the 'CarCl' class

    2. Make the 'charge' property private

    3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
    methods of this class, and also update the 'brake' method in the 'CarCl'
    class. Then experiment with chaining!

  Test data:
    § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return `US Speed: ${Math.round(this.speed / 1.6)} mi/h`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    console.log(`New Speed: ${this.speed += 10} km/h`)
    return this;
  }
  brake() {
    console.log(`New Speed: ${this.speed -= 5} km/h`)
    return this;
  }

}

class EV extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    return this.#charge = chargeTo, this;
  }

  accelerate() {
    console.log(`${this.make} is going at ${this.speed += 20} km/h, with charge of ${this.#charge - 1}%`);
    return this;
  }
}

const evCar = new EV('Tesla', 120, 23);

evCar
  .accelerate()
  .brake()
  .accelerate()
  .brake()
  .chargeBattery(25)
  .accelerate()
  .brake()
  .brake()
  .chargeBattery(55)
  .accelerate()
;

