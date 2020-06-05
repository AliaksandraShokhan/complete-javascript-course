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
let firstName = 'John';
let age = 16;
 age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


let job = 'instructor';
switch (job) {
    case 'teacher' :
    case 'instructor' : console.log(firstName + ' teaches kids how to code.');
    break;
    case 'driver' : console.log(firstName + ' drives an uber in Lisbon.');
    break;
    case 'designer' : console.log(firstName + ' designs beautiful websites.');
    break;
    default: console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13 : console.log(firstName + ' is a boy.');
    break;
    case age >= 13 && age < 20 : console.log(firstName + ' is a teenager.');
    break;
    case age >= 20 && age < 30 : console.log(firstName + ' is a young man.');
    break;
    default: console.log(firstName + ' is a man.');

}






