/*Scoping is determining where variables, functions, and objects are accessible in your code during runtime.
*There are different scopes:
*Local Scopes - var
*Global Scopes - var
*Block scopes - const, let
*/

//global variable- can be used anywhere. - global scope
var name = "";
assignName('Chazz');
//local scope, str can only be used within the function.
function assignName(str){
    
    if(str.length > 0){
        //msg only accessible within the function
        //if let or const were used instead of var, the console log at the end of the function would not work.
        var msg = "My name is ";
        
        //secondMsg only usable in the if block- block scope.
        const secondMsg = "My name is not Jake.";
        name = str;
    }
    //prints My name is Chazz (unless let or const were used)
    console.log(msg + name)
    
    //will not work, so commented out:
    //console.log(secondMsg);
    
    //also will not work because const variables cannot be reassigned.
    //secondMsg = "My name isn't George.";
}

var animal = "";

function assignSpecies(animal){
    //animal is referring to the parameter, not the global variable with the same name.
    if (animal.length > 0)
        return "bigger than 0";
}

//this animal refers to the global variable named animal, not the one created in the function.
console.log(animal);

