//Hoisting is JavaScript's default behavior of moving declarations to the top.


/* The JS interpreter executes JavaScript code.
* It interprets code in a specific order.
*/



/*Prints undefined, as name is not assigned yet. Name is saved in memory before the code is executed, but the assignment to "Chazz"
*is not executed until after the console.log(name), so undefined is printed.
*/


console.log(name);
var name = "Chazz";

/*The JS interpreter interprets this code as:
*var name;
*console.log(name)
*name = "Chazz"
*/


//Create global variable 'age', which ends up never being used.
var age = 19;

function hoist() {
  // Condition that does not affect output
  if (false) {
    var age = 100;
  }
  console.log(age);
}
//output undefined, because age was hoisted to the top of the hoist function, as it was declared with var.
hoist();


//create global variable 'x' with let
let x = true;

function hoisted() {
  // Initialize x in the function scope
  if (false) {
    let x = false;
  }
  console.log(x);
}

//prints true, because let (and const) is block scoped, and will not be hoisted.
hoisted();




//outputs hoisted
isHoisted();

//outputs a type error; undefined is not a function.
isNotHoisted();

function isHoisted(){
  console.log("hoisted")
}

var isNotHoisted = function(){
  console.log("not hoisted")
}