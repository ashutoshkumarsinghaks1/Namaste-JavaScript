//Closure

/*
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}

x();

//output: 7
*/

//This is a closure . Its an example of closure

//*********** */

//Closures = Function along with its lexical scope forms a closure.

/*
function x() {
    var a = function y() {
        console.log(a);
      }
    
    y();
  }
  
  x();
*/

// You can assign functions to a variable in Javascript.

// You can can pass a function as a argument in javascript.

/*
function x() {
    var a = 7;
    
    y();
  }
  
  x( function y() {
    console.log(a);
  }
);

*/

//Similarly ,You can even return function from function.Instead of calling it you could have return it.

/*

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }

  return y;
}

x();

*/

//************** */

/*
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }

  return y;
}

var z = x();
console.log(z);

//output:
// ƒ y() {
//     console.log(a);
//   }

*/

//********** */

/*
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }

  return y;
}

var z = x();
console.log(z);
z();

//output:

// ƒ y() {
//     console.log(a);
//   }

// 7

*/

/*

function x() {
  var a = 7;
  return function y() {
    console.log(a);
  };
}

var z = x();
console.log(z);
z();


//output:

// ƒ y() {
//     console.log(a);
//   }

// 7

*/

// return y; is same as return function y(){}

//********** */

/*
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }

  a = 100;
  return y;
}

var z = x();
console.log(z);
z();


//ouput:
// ƒ y() {
//     console.log(a);
//   }

// 100

*/

//Here output gives "100" because console.log(a) is givng output of reference of "a" not value of "a".

//********** */

/*
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

*/

//Scope:
// closure(x)
// a:7
// closure(z)
// b:900

// Uses of Closures

/*

1.Module Design Pattern
2.Currying
3.Function like once
4.memoize
5.maintaining state in async world
6.setTimeouts
7.Iterators
8.and many more ......
 */


