//Strings can be manipulated with operators and methods.

var str = "Hello";

//We can add on to a string variable with the += operator.
str += " World";

//We can also concatenate strings with the + operator.

var name = "Chazz";

//prints "Hello Chazz"
var msg = "Hello " + name;

//Strings can also be manipulated through various string methods.

//returns the string in all uppercase.
console.log(msg.toUpperCase())

//Returns the character in the string at the specified index (in this case it is 'H').
console.log(msg.charAt(0));