// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
        
    //uses the isArray method.
    return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //check and make sure value is array, null, a date, an object 
    return (typeof value === "object" && !Array.isArray(value) && value !== null && !(value instanceof Date));
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //check and make sure value is an object (which is a collection), not an array, not null, not a date, or just if the value is an array (which is a collection)
    return ((typeof value === "object" && !Array.isArray(value) && value !== null && !(value instanceof Date))||Array.isArray(value));
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    //isarray method
    if(Array.isArray(value))
        return "array";
    else if(value === undefined) //if undefined , print undefined
        return "undefined";
    else if(typeof(value) === 'number') //typeof method will return number if its a number.
        return "number";
    else if(value === false || value === true) //only booleans can be true or false, so.. print boolean if either one is true.
        return "boolean";
    else if(value == null && value !== undefined) //undefined is also null, so we need to make sure it is not undefined and equal to null.
        return "null";
    else if(typeof value === 'function') //typeof will return function if its a function
        return "function";
    else if(value instanceof Date) //instanceof Date will return true if value is a date.
        return "date";
    else if(typeof(value) === 'object') //typeof object will return true if its an object, after all the previous if statements are passed (because other things can be objects like arrays)
        return "object";
    else
        return "string"; //string is the only thing left, so just put it in the else statement.

    // YOUR CODE ABOVE HERE //
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
