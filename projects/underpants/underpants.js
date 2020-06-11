// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
        //isarray method
    if(Array.isArray(value))
        return "array";
    else if(value === undefined) //if undefined , print undefined
        return "undefined";
    else if(typeof value === 'number') //typeof method will return number if its a number.
        return "number";
    else if(value === false || value === true) //only booleans can be true or false, so.. print boolean if either one is true.
        return "boolean";
    else if(value === null && value !== undefined) //undefined is also null, so we need to make sure it is not undefined and equal to null.
        return "null";
    else if(typeof value === 'function') //typeof will return function if its a function
        return "function";
    else if(typeof value === 'object') //typeof object will return true if its an object, after all the previous if statements are passed (because other things can be objects like arrays)
        return "object";
    else
        return "string"; //string is the only thing left, so just put it in the else statement.
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(ary, num){
    //if not array return array literal
    if(!Array.isArray(ary) || num < 0)
        return [];
    else if(!num) //if not a number or doesnt exist, return index 0 
        return ary[0];
    else //otherwise, return the first num numbers of array.
        return ary.splice(0,num);
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(ary,num){
    //if not array, return array literal
    if(!Array.isArray(ary))
        return [];
    else if(num > ary.length) //if num is bigger than array's length, return whole array
        return ary;
    else if (num) //start from distance from end, end at num
        return ary.splice(ary.length-num,num);
    else if (!num) //if num is NaN, remove
        return ary.pop();
    
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value) {
    //if value isnt in array, return -1
    if (array.includes(value) === false) {
       return  -1; 
    //if value is in array, loop through the array and look for value. then, return i (the index) of said value
    } else if (array.includes(value) === true) {
        for (var i = 0; i < array.length; i++) {
            if (value === array[i]) {
                return i;
            }
        }
    }
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

 _.contains = function (array, value) {
     //if no value is given, return array
     if (!value) {
         return array;
     //anything else, return true if it includes value, false otherwise
     } else {
         return array.includes(value) ? true : false;  
     }
 };


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function (collect, func){
    //if collection is array, loop through array and call function with params element, index, collection
    if(Array.isArray(collect)){
        for(let i = 0; i < collect.length; i++){
            func(collect[i], i, collect);
        }
    //anything else (object), loop through collect 
    }else{
        for(let x in collect){
            //collect[x] is property value, x is property, collect is collection
            func(collect[x],x, collect);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
  var newArr = [];
  //loop through array
  for(var i = 0; i < array.length; i++){
    //if array element isnt in newarray already, push it to it.
    if(_.indexOf(newArr,array[i]) === -1){
        newArr.push(array[i]);
    }
}
    return newArr;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array, func) {
    var ary = [];
    //perform a function that pushes current element when function returns true
    _.each(array, function(e, i, a){
        if(func(e,i,a)){
            ary.push(e);
        } return ary;
    });
    return ary;
 };

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    //set up container for failed values
    const failed = [];
    //loop through array 
    for(var i = 0; i < array.length; i++){
        //if the filter does not include the value at the specific index
        if(!(_.filter(array, func).includes(array[i]))){
            //push the new values into the new array 
            failed.push(array[i]);
        }
    }
    return failed; //return the array 
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function (ary, func){
    //create array to put arrays into
    let arrays = [];
    //first array is filter which returns truthy values
    arrays[0] = _.filter(ary,func);
    //second is reject which returns falsey values
    arrays[1] = _.reject(ary,func);
    return arrays;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    let ary = []; //set new container 
    //calls the Each function and passes <collection> and <function(element ,index , array)>
     _.each(collection, function(e, i ,a){
       ary.push(func(e,i,a)); //pushes the element, index, and array into the new array
    });
        
    return ary; //return new array
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(ary, prop){
    let arr = [];
    //use map to access element in ary, use bracket notation to return the property of element(object)
    _.map(ary, function(e,i,a){
        arr.push(e[prop]);
    });
    return arr;
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function (collect, func){
    //make default value = true
    var val = true;
    //if func is not provided, loop through collection and return false if any elements are false.
    if(!func){
        for(var i = 0; i < collect.length; i++){
            if(!collect[i])
                val = false;
        }
    return val;
    }
        //loop through collection using each
    _.each(collect, function(e, i, c){
        //if return value is false, default value = false
        if(!func(e,i,c)){
            val = false;
        }
    });
    //return default value
    return val;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function (collect, func){
    //make default value = true
    var val = false;
    //if func is not provided, loop through collection and return true if any elements are true.
    if(!func){
        for(var i = 0; i < collect.length; i++){
            if(collect[i])
                return true;
        }
    return val;
    }
        //loop through collection using each
    _.each(collect, function(e, i, c){
        //if every return value is false, default value = false
        if(func(e,i,c)){
            val = true;
        }
    });
    //return default value
    return val;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(arr, func, seed){
    //check if seed is given
    var defaultvalue = arguments.length < 3;
        //for each array, call function with element, index, list
        _.each(arr, function(elem, index, list){
            //if seed was given, make default value false, and make seed current element (use seed as prev result)
            if(defaultvalue) {
                defaultvalue = false;
                seed = elem;
        }   else //set seed equal to return value of given function
                seed = func(seed, elem, index, list);
      });
      return seed;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(){
    //assign all arguments to args
    var args = arguments;
    //loop through each object
    for(let i = 1; i < args.length; i++){
        //for each object, let x represent the property
        for(let x in args[i]){
            //add args object property to first object
            args[0][x] = args[i][x];
        }
    }
    //return the first object
    return args[0];
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
