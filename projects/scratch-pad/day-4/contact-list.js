// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    
    //create new object with the property parameters.
    var newObject = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
    //return it
    return newObject;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //push contact param to contacts array
        addContact: function(contact){
            contacts.push(contact);
        },
        findContact: function(fullName){
            //create array with fullName param, parsing at spaces.
            var full = fullName.split(" ");
            
            //loop through contacts array and deciding if any names are equal, then return the object if found. undefined if otherwise.
            for(var i = 0; i < contacts.length; i++){
                if(full[0].toLowerCase() === contacts[i].nameFirst.toLowerCase() || full[1].toLowerCase() === contacts[i].nameFirst.toLowerCase())
                    return contacts[i];
                else
                    return undefined;
            }
        },
        removeContact: function(contact){
            //loop through contacts and if and of contacts elements match the contact parameter, splice(remove) said param
            for(var i = 0; i < contacts.length; i++){
                if(contact === contacts[i])
                    contacts.splice(i,1);
            }
        },
        printAllContactNames: function(){
            //new string variable
            var listOfNames = "";
            
            //loop through contacts to print all values.
            for(var i = 0; i < contacts.length; i++){
                //concatenate first and last name and add them to new listofnames array.
                listOfNames += (contacts[i].nameFirst + " " + contacts[i].nameLast);
                
                //when not on the last one, make a new line.
                if(i < contacts.length-1)
                    listOfNames += "\n";
            }
            //return the new string variable 
            return listOfNames;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
