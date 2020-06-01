//if statements execute a block of code when a specific argument is, in boolean terms, true.
if(6 > 5)
    //execute this code because 6 is greater than 5.
    console.log(true);

//else if statements are useful when multiple conditions could be true. for example:
var age = 17;

if(age > 18)
    console.log("can buy tobacco")
else if(age > 21)
    console.log("can buy alcohol")
else if(age > 120)
    console.log("too old.")
else 
    console.log("too young.")
    
//the code after the "else" statement will execute when all of the other conditions end up being false. In this case, "too young" will be printed because the age is not greater than 18, 21, or 120.

//This could also be done with switch statements.
var day;
switch (new Date().getDay()) { //creates a number 0-6 repesenting what day of the week it is
  case 0: //if it is 0, it will make the day variable sunday.
    day = "Sunday";
    break; //the switch statement always ends when it reaches "break". Every case usually needs a break, or it will go on to the next case executions.
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log("Today is " + day);