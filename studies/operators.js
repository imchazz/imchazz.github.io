//Assignment operators assign values to variables. 

//The = assignment operator assigns a value to a variable.
var x = 2;
var y = 9;

//same as y = y * x
y *= x;

//this can be done with any arithmetic symbol.

y /= x;
x += y;

//Arithmetic oeprators perform math on variables. 

//8
x = 5+3;

//0
y = 20 % 5;

//Comparison operators compare values. They typically represent boolean values.
if(x >= y)
    console.log(true);
if(x<y)
    console.log(false);
    
//Logical operators are used to determine the logic between variables.
if(x>=y && y > 5 || x > 10)
    console.log("the first two are both true, or just the last one is true");

//! is a unary operator. It makes the overall boolean value opposite of its orignal value.
if(!x>5)
    console.log("if x > 5, this will not print.");
    
var age = 20;

//if age is < 18, it will print 'too young', otherwise it will print 'old enough'.
var voteable = (age < 18) ? "Too young":"Old enough";