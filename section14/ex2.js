/*

  Coding Challenge #2

  Your tasks:
    1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

    2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
    by 1.6)

    3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
    converts it to km/h before storing the value, by multiplying the input by 1.6)

    4. Create a new car and experiment with the 'accelerate' and 'brake'
    methods, and with the getter and setter.

  Test data:
    § Data car 1: 'Ford' going at 120 km/h

*/

class CarCl {
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

const ford = new CarCl('Ford', 120);

console.log(ford.speedUS);

console.log(ford.accelerate());
console.log(ford.brake());
console.log(ford.accelerate());

console.log(ford.speedUS);

console.log(ford.brake());
console.log(ford.brake());

console.log(ford.speedUS);

ford.speedUS = 20;
console.log(ford.speedUS);
