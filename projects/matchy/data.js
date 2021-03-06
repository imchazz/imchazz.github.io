/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
//add using dot notation
animal.species = "Cat";
//add using bracket notation
animal["name"] = "George";
//creates noises property which is an array
animal.noises = [];

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//creates noises array
var noises = [];

noises[0] = 'meow';

//pushes purr to end of array
noises.push('purr');

//adds hiss to beginning
noises.unshift('hiss');

//adds grumble to end using bracket notation.
noises[noises.length] = "grumble";

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//adds noises array to noises key
animal['noises'] = noises;

//adds yowl property to end of noises properties
animal['noises'][noises.length] = 'yowl';


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      Bracket notation and dot notation.
 * 2. What are the different ways of accessing elements on arrays?
 *      Bracket notation.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);

var wolf = { species: 'wolf', name: 'Ted', noises: ['growl', 'howl', 'bark']};
animals.push(wolf);

var bear = { species: 'bear', name: 'John', noises: ['growl', 'grumble']};
animals.push(bear);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Array for list of friends
var friends = [];

function getRandom(arr){
    //creates random index from arr and issign to new variable
    var index = Math.floor(Math.random() * Math.floor(arr.length))
    return index;
}

//pushes random animal name to friends array.
friends.push(animals[getRandom(animals)]['name']);

//adds friends array to new friends key
animal['friends'] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}