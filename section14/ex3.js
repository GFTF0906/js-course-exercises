/*

  Coding Challenge #3

  Your tasks:
    1. Use a constructor function to implement an Electric Car (called 'EV') as a child
    "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
    current battery charge in % ('charge' property)

    2. Implement a 'chargeBattery' method which takes an argument
    'chargeTo' and sets the battery charge to 'chargeTo'

    3. Implement an 'accelerate' method that will increase the car's speed by 20,
    and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
    km/h, with a charge of 22%'

    4. Create an electric car object and experiment with calling 'accelerate',
    'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
    you 'accelerate'! Hint: Review the definiton of polymorphism

  Test data:
    § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

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
    return `New Speed: ${this.speed += 10} km/h`;
  }
  brake() {
    return `New Speed: ${this.speed -= 5} km/h`;
  }

}

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }

  accelerate() {
    return `${this.make} is going at ${this.speed += 20} km/h, with charge of ${this.charge -1}%`;
  }
}

const evCar = new EV('Tesla', 120, 23);

console.log(evCar.accelerate());
console.log(evCar.brake());
evCar.chargeBattery(25);
console.log(evCar.accelerate());

