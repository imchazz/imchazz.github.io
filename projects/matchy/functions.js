/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(arr,str){
    //loops through array and checks if name property matches str argument
    for(var i = 0; i < arr.length; i++){
        
        if(arr[i].name.toLowerCase() === str.toLowerCase())
            //return the whole object if name is found.
            return arr[i];
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for(var i = 0; i < animals.length; i++){ 
        
        //if name is found, remove element from array, add new object in its place.
        if(animals[i].name.toLowerCase() === name.toLowerCase())
            animals.splice(i);
            animals[i] = replacement;
    }
    //do nothing otherwise
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals,name){
    for(var i = 0; i < animals.length; i++){
        
        //if name is found, remove animal from array.
        if(animals[i].name.toLowerCase() === name.toLowerCase())
            animals.splice(i);
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals,animal){
    //if the name and species are not empty..
    if(animal.name.length > 0 && animal.species.length > 0){
        //check if the name already exists..
        for(var i = 0; i < animals.length; i++){
                //if the name does exist, do nothing.
                if(animals[i].name.toLowerCase() === animal.name.toLowerCase()){
                   return null;
                }
          //otherwise, push the new animal object to the animals array.
        } animals.push(animal);
        
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
