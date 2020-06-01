//We declare a function, which is written to do a specific task, that executes when it is called.

//Functions are useful because they can be reused.

var name = "Chazz";

//'string' is a parameter that the function uses.
function namePrinter(string){
    console.log(name);
}

//We use the variable 'name' as the argument that is passed as the 'string' parameter.
namePrinter(name);


//we can assign a function to a variable.
var xyz = function abc(){
  // xyz is visible here
  // abc is visible here
}
// xyz is visible here
// abc is undefined here


//Functions can return a value, or perform a specific task, or both.
var age= 19;
function agePrinter(num){
  num += 5;
  return num;
  //num only exists within the function.
}
//prints 24
console.log(agePrinter(age));


//A function can access all variables defined inside the function and outside the function.
function addAge(){
  var num = 6;
  age+= num;
}
addAge();
//age has 6 added to it now.
console.log(age);