// console.log("Hello World!");

// let firstName = 'John';
// let civilStatus = 'single';
//
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }
//
// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

/*
***** Boolean logic
 */

// let firstName = 'John';
// let age = 20;
//
// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }

/*
Ternary Operator and Switch Statements
 */
// let firstName = 'John';
// let age = 16;
//  age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
//
// let drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
//
//
// let job = 'instructor';
// switch (job) {
//     case 'teacher' :
//     case 'instructor' : console.log(firstName + ' teaches kids how to code.');
//     break;
//     case 'driver' : console.log(firstName + ' drives an uber in Lisbon.');
//     break;
//     case 'designer' : console.log(firstName + ' designs beautiful websites.');
//     break;
//     default: console.log(firstName + ' does something else.');
// }
//
// switch (true) {
//     case age < 13 : console.log(firstName + ' is a boy.');
//     break;
//     case age >= 13 && age < 20 : console.log(firstName + ' is a teenager.');
//     break;
//     case age >= 20 && age < 30 : console.log(firstName + ' is a young man.');
//     break;
//     default: console.log(firstName + ' is a man.');
//
// }


/*
Truthy and Falsy values and equality operators
 */
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// let height;
// height = '23';
//
// if(height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable is not defined');
// }
//
//
// if (height == 23) {
//     console.log('The == operator does type coercion');
// }

let teamMike = [89, 120, 103];
let teamJohn = [116, 95, 123];
let teamMary = [120, 87, 109];

function average(arr){
    let x = arr.reduce(function(a,b){
        return a + b
    }, 0);
    return x / arr.length;
}

let averageMike = average(teamMike);
let averageJohn = average(teamJohn);
let averageMary = average(teamMary);

console.log(averageMike, averageJohn, averageMary);

switch (true) {
    case averageMike > averageJohn && averageMike > averageMary:
        console.log('Mike wins');
        break;
    case averageJohn > averageMike && averageJohn > averageMary:
        console.log('John wins');
        break;
    case averageMary > averageJohn && averageMary > averageMike:
        console.log('Mary wins');
        break;
    default:
        console.log('It\'s a draw');
}











