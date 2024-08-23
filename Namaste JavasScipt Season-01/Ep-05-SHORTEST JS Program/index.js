var a = 10; // global space

function b() {
  var x = 10; // variable x is not in global space.
}

// function b() is also in global space.
// Note: To make thing simply => anything which is not inside function is in global space.

// window is a global "object"
//Whenever we create a variable and funtion in global space these get attached to the "window"

// How do we access this ?
console.log(window.a); //10
console.log(a); //10
// console.log(x); // RefrenceError : x is not defined.
console.log(this.a) // 10
