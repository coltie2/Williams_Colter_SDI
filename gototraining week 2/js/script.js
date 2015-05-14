/* Colter Williams
gototraining week 2
5-14-15
section 01
 */

//alert("testing to see if connected");

// create an age calculator

//ask the user their name
var name = prompt("please type in your name:");
//console log the name to check it.
console.log(name);

//alert the user and say welcome and explain what we are doing.
alert("welcome "+name+" let's figure out how old you are");

// ask the user what year they are born in.
//create a variable to catch the answer
var yearBorn = prompt("what year were you born");
console.log(yearBorn);

//calculate the users age
//we need to now the current year
var currentYear = 2015;
var age = currentYear - yearBorn -1;

//alert user with their age
alert(name+" you are "+age+" years old.");

//make this more complex!!!
//find users fiture age
var yearsMore = prompt("how many years in the future would you like to know?");
console.log(yearsMore);

// calculate the future age
//cast the yearsMore variable as a number.
var futureAge =  age + Number(yearsMore);
console.log(futureAge);

//make final output
console.log(name+" you will be "+futureAge+" in "+yearsMore+" years.");
alert(name+" you will be "+futureAge+" in "+yearsMore+" years.");
