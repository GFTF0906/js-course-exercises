'use strict'

/*
    Use the BMI example from Challenge #1, and the code you already wrote, and 
    improve it.

    Your tasks:
        1. Print a nice output to the console, saying who has the higher BMI. The message 
        is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
        
        2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
        BMI (28.3) is higher than John's (23.9)!"

    Hint: Use an if/else statement
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
if (markHigherBMI) {
    console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's ( (${bmiJohn.toFixed(2)}) !`);
} else {
    console.log(`John's BMI (${bmiJohn.toFixed(2)}) is higher than Marks's ( (${bmiMark.toFixed(2)}) !`);
}

markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

bmiMark = markWeight / Math.pow(markHeight, 2);
bmiJohn = johnWeight / Math.pow(johnHeight, 2);

markHigherBMI = bmiMark > bmiJohn;

console.log('\nData 2')
if (markHigherBMI) {
    console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's ( (${bmiJohn.toFixed(2)}) !`);
} else {
    console.log(`John's BMI (${bmiJohn.toFixed(2)}) is higher than Marks's ( (${bmiMark.toFixed(2)}) !`);
}
