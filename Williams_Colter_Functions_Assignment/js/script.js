/*/**
 * Created by Colter Williams
 * 5/26/15
 * Section 01
 * Williams_Colter_Functions_Assignment
 */


//created test to see if html is connected
//alert('testing 1,2,3');

//create welcome calculator alert
alert("Welcome to the body calculator. This calculator will help you calculate how many pounds you have added/subtracted and then tell you what that percentage is. ");

//create variable for old weight (pounds)
var oldWeight = prompt("Enter old weight in pounds");

//create variable for current weight (pounds)
var currentWeight = prompt("Enter current weight in pounds");


//percent is 100 variable
var percent100 = 100;

//loading screen for fun
alert("Processing information!One moment Please.");

//create function variable for weight
var resultWeight = calculatePercent(currentWeight,oldWeight);
console.log("Your weight change is " +resultWeight +" pounds more or less.");

//create first function
function calculatePercent(c,o,){
      return c - o;
}
