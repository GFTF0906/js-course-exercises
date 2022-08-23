'use strict'

/* Coding Challenge ~1

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
    and height in meter).

Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both 
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about 
    whether Mark has a higher BMI than John.

Test data:
    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
    m tall.
    
    § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
    m tall.

*/

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let bmiMark = markWeight / Math.pow(markHeight, 2);
let bmiJohn = johnWeight / Math.pow(johnHeight, 2);

let markHigherBMI = bmiMark > bmiJohn;

console.log('Data 1')
console.log('Is Mark BMI higher than John? ');
console.log('Result: ' + markHigherBMI);

markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

bmiMark = markWeight / Math.pow(markHeight, 2);
bmiJohn = johnWeight / Math.pow(johnHeight, 2);

markHigherBMI = bmiMark > bmiJohn;

console.log('\nData 2')
console.log('Is Mark BMI higher than John? ');
console.log('Result: ' + markHigherBMI);