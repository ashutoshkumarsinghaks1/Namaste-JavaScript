// var x = 7;

// function getName(){
//   console.log("Namaste JavaScript")
// }

// getName();
// console.log(x)

//output:
// Namaste JavaScript
// 7

//******** */

/*
getName();
console.log(x);

var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}

// output:
// Namaste JavaScript
// undefined
*/

//************ */

/*
getName();
console.log(x);



function getName() {
  console.log("Namaste JavaScript");
}


//output:
// Namaste JavaScript
// Uncaught ReferenceError: x is not defined
*/

//************** */

/*
var x = 7;

function getName(){
  console.log("Namaste JavaScript")
}

console.log(getName)

//output:
//ƒ getName(){
//   console.log("Namaste JavaScript")
// }

*/

//************** */

/*
console.log(getName);
var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}


//output:
// ƒ getName() {
//   console.log("Namaste JavaScript");
// }
*/

//************* */

/*

getName();
console.log(x)
console.log(getName);
var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}

//output:

// Namaste JavaScript
// undefined
//  getName() {
//   console.log("Namaste JavaScript");
// }

*/

//************** */

/*
getName();
console.log(x);
console.log(getName);

var x = 7;

var getName = () => {
  console.log("Namaste JavaScript");
}

//output:
//TypeError: getName is not a function
*/

//********* */

// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName(){

// }

//**************** */

// var x = 7;
// function getName() {
//   console.log("Namaste JavaScript");
// }

// getName();
// console.log(x);
// console.log(getName);

//**************** */
// call stack

/*

function one() {
  console.log("one");
}
function two() {
  console.log("two");
}
function three() {
  console.log("three");
}

one();
two();
three();

*/

function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}

one();
two();
three();
