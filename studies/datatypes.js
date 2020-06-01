//Datatypes are kinds of data items that are defined by the values it can take, like numbers, strings, booleans, and more.

//In JavaScript, one can declare a variable (using keyword var) and decide its datatype with what you assign it with.

//age has been assigned a numerical value.
var age = 19;


//name has been assigned a string value.
var name = "Chazz";


//boolean
var human = true;


//arr is an array, defined by the brackets.
var arr = [1,2,3,4,5];


//the "car" variable is an object, defined by the curly braces which contain keys and properties of each key.
var car = {
    color: "red",
    make: "Chevy",
    model: "Malibu"
}


//the multiply function is defined by parenthesis and curly braces, which contain parameters (which are passed by arguments) and curly braces which contain what the function does, respectively.
function multiply(num1, num2){
    return num1*num2;
}

//Both of these variables have of a value of undefined, by either assigning it to the undefined keyword or assigning it to nothing at all.
var doNotDefine = undefined; 
var dontDefine;


//NaN is not a number, which represents a non-real number.
var age = NaN;


//inf is assigned to Infinity which is greater than any other value, and negativeInf is assigned to negativve infinity, which is smaller than any other value.
var inf = Infinity;
var negativeInf = -Infinity;



/* There are simple data types and complex data types.
*  Simple data types have content directly contained between opening and closing tags, and have no attributes.
*  Complex types can have attributes and can contain other elements.
*/

//the truck variables is a complex data type.
var truck = {
    color: "white",
    make: "ford"
};

//the str variable is a simple data type.
var str = "Hello World!";

/* Primitive values are passed to a function by copy, complex values are by reference.
*  Function by copy means when a new variable refers to an already existing variable
*  and creates a new space in memory. Copy by reference means it does not create a new spot in 
*  memory, and the methods refer to the variable directly.
*/