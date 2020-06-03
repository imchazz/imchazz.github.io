// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    //loop through numbers 1-100
    for (var i=1; i < 101; i++){
        //if number divided by 15 does not have a remainder, it means it is a multiple of 5 and 3 because those are the only multiples of 15
        if (i % 15 == 0)
            console.log("FizzBuzz");
        //decide if i is a multiple of 3
        else if (i % 3 == 0)
            console.log("Fizz");
        //decide if i is a multiple of 5
        else if (i % 5 == 0)
            console.log("Buzz");
        //print all other numbers
        else 
            console.log(i);
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}