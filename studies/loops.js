//There are for loops, while loops, and for-in loops.

//For loops are used to execute a block of code multiple times until a condition is satisfied. The syntax is as follows:

for(var i = 0; i < 10; i++)
    console.log(i);
    //will print numbers 0-9

//In this case, the number starts at 0, and increments until the i < 10 condition is satisfied. So, it will print i until it reaches 10, then it will not print i, so 10 will not be printed.

//While loops will loop while a condition is true.
var num = 0;

while(num < 10){
    console.log(num);
    num++
}
//will print numbers 0-9.

//we can also loop in reverse with the following syntax:
var arr = ['Hello','World','What is','Up'];

for(var i = arr.length; i >= 0; i--)
    console.log(arr[i]);
    
/*prints:
*Up
*What is
*World
*Hello
*/

//We can also loop through objects, which is best done with a for-in loop.
var obj = {
    name: "Chazz",
    lastName: "Conino",
    age: 19
};
var person = "";
var x;
for(x in obj){
    person += obj[x] + " ";
}
    //outputs Chazz Conino 19
    console.log(person);
    