//Q1
/*
function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

x();

// output: print 1 after 1 sec
*/

//************ */

//Q2
/*
function x() {
    var i = 1;
    setTimeout(function () {
      console.log(i);
    }, 3000);
  }
  
  x();

//output: Print 1 after 3 sec

*/

//Q3.

/*
function x() {
    var i = 1;
    setTimeout(function () {
      console.log(i);
    }, 3000);

    console.log("Namste Javascript")
  }
  
  x();

  //Ouput: Namaste Javacript and after three sec 1 in the next line.
*/

//Q4 Suppose we have print 1 after 1sec , 2 after 2sec , 3 after 3 sec and so on... till 5

/*
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    },  i* 1000);
  }
  console.log("Namaste Javascript")
}

x();


//output:
Namaste Javascript
6
6
6
6
6

*/

// So , How we can fix it , we can fix it using "let"

/*
function x() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(function () {
        console.log(i);
      },  i* 1000);
    }
    console.log("Namaste Javascript")
  }
  
  x();

//ouput:
Namaste Javascript
1
2
3
4
5

*/

// because "let" variables are blocked scope and each time a new i is formed .

// becacuse of "let" when function is called it is referring to different copy of each time

// but in case of "var" it is referring to same copy of i every times means same memory.

//Q5 What if interviewer ask to with "var" only.

// It was not working with "var" because copy of the console.log(i) refers to same memory location. So somehow we have to give a new copy of i every time to this setTimeout and forms a closure with it.

//So if we want to fix it with "var" we can form a closure

/*
function x() {
  for (let i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i)
  }
  console.log("Namaste Javascript");
}

x();


//output:
Namaste Javascript
1
2
3
4
5

*/

