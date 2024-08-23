/*
function a() {
  console.log(b);
}

var b = 10;
a();

//output: 10

*/

//****** */

/*
function a() {
  c();
  function c() {
    console.log(b);
  }
}

var b = 10;
a();

//output: 10

*/

//******** */

/*
function a() {
    var b = 10;
    c();
    function c() {
      console.log(b);
    }
  }
  
  
  a();

  //output:10
  */

  //*********** */


/*
function a() {
    var b = 10;
    c();
    function c() {
     
    }
  }
  
  
  a();
  console.log(b);

  //output:ReferenceError: b is not defined
  */






  // Summary : 

  // 1. Scope in Javascript is directly realated to the lexical environment.
  // 2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
  // 3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
  // 4. The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
  // 5. The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.