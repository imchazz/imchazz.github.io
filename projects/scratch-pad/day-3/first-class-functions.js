// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //compares value with base, prints true if value is larger in size; prints false otherwise.
    return function (value){
        if (value > base){
            return true;
        } else { return false }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //same as last one but opposite
    return function (value){
        if (value < base){
            return true;
        } else { return false }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
 
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    
    return function (string){
        //if the startswith letter is the same as the first letter in string, both made lowercase, then return true.
        if(string[0].toLowerCase() === startsWith.toLowerCase()){
            return true;
        } else {
            //otherwise false
            return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    
    return  function (string){
        //last character in string is represented with string.length-1 which goes in a bracket.. then compared to the endswith character.
        if(string[string.length-1].toLowerCase() === endsWith[endsWith.length-1].toLowerCase()){
            return true;
        } else {
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    //empty array
    var arr = [];
    
    //loop through strings parameter
    for(var i = 0; i < strings.length; i++){
        //push each string, modified with the modify parameter, to the created array.
        arr.push(modify(strings[i]));
    }
    //finally, return the new array.
    return arr;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    for(var i = 0; i < strings.length; i++){
        //if test ever hits false, return false
        if(!test(strings[i])){
            return false;
        }
    }
    //default to true if never hits false
    return true;

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}