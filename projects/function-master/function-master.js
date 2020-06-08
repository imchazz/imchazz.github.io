//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //values method
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //return keys as array but joining the array as a string with spaces
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//make array of values of object along with empty string

var arr = Object.values(object);
var str = [];
    //loop through values, and only push to new array when it is a new string
    for (var i = 0; i <= arr.length; i++){
        if(typeof arr[i] === 'string'){
            str.push(arr[i]);
        }
    }
    //join string array to a string separated by spaces.
   return str.join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //instanceof returns a bool if matches mentioned object
    if(collection instanceof Array)
        return "array";
    if(collection instanceof Object)
        return "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //make first letter uppercase, then add the rest with slice
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //make string an array, spliting by spaces
    string = string.split(" ");

    for (var i = 0; i < string.length; i++) {
        //make each element a new string with the capitalizeWord method
        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
    }
    //join the array into a string separated by spaces.
    return string.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //concatenate welcome and the ! and make sure the name gets capitalized.
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //concatenate name and species while capitalizing them
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) 
    + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if noises is an array and not empty, 
    if(object.noises instanceof Array && object.noises.length > 0)
        //make array into string joined by spaces
        return object.noises.join(" ");
    else
        return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //split the string by space, make it an array, and see if it includes word
    return string.split(" ").includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //push name to friends array, return object
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // if(Object.keys(object).length !== 0)
    //     return (object.friends.includes(name));
    // else
    //     return false;
    
    //I really wanted to try the ternary operator!
    return (Object.keys(object).length === 0 ? false : object.friends.includes(name));
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //empty array for names
    var names = [];
    
    //resulting array
    var notFriends = [];
    
    //variable 
    var temp;
        //loop through object to separate name from the rest of names
        for(let i = 0; i<array.length; i++){
            //if name param is the same as concurrent name, make temp that object
            if(name === array[i].name)
                temp = array[i];
            else //otherwise, push name to new array
                names.push(array[i].name);
        }
        
    //if no friends, return all the rest of the names
        if(temp === null){
            return names;
        }
        //loop through names to see if they contain any of the temp's names.
        for(let i = 0; i<names.length; i++){
            //if index of temp object is 
            if(temp.friends.indexOf(names[i]) == -1)
                notFriends.push(names[i]);
        }
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //change object key value using bracket notation, then return the new object
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var i = 0; i < array.length; i++){
        //use delete operator
        delete object[array[i]];
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //return a new filtered array.
    return array.sort().filter(function(element, index, arr) {
        //if current value is not equal to the previous value, include it in the new array.
        return element != arr[index - 1];
    })
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}