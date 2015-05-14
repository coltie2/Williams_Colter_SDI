/*
Colter Williams
5-13-15
Section 01
Williams_Colter_Expressions_Assigment.
 */

//Create welcome alert.
alert("Welcome to the cement calculator");
//Create an alert explaining what this calculator will do.
alert("This calculator will help you determine the cubic feet needed to complete your project and convert the cubic feet to cubic yards when ordering your cement.");

//Create variables for width, height, and depth.
var width = prompt("Please enter your width:");
console.log(width);
var height = prompt("Please enter your height:");
console.log(height);
var depth = prompt("Please enter your depth:");
console.log(depth);

//Add loading screen joke
alert("Beep..Boop..Boop..Loading answer!");

//Create a array using the variable above an label it font dimensions.
fontDimensions = [width,height,depth]; // 0,1,2

//Create an alert and times the 3 parts of the array together to get how many cubic feet you have.
 alert("You have " +fontDimensions[0] * +fontDimensions[1] * +fontDimensions[2] +" cubic feet!");
//Use console.log to track numbers.
console.log("You have " +fontDimensions[0] * +fontDimensions[1] * +fontDimensions[2] +" cubic feet!");

//Cement is ordered by the cubic YARD so we must now convert cubic "feet" to cubic YARDS.
// 1 cubic yard is 27 cubic feet
alert("Since cement is ordered by the cubic yard, this calculator will now give you how many cubic yards you will need");

//Create variable for 27 cubic feet/
var endResult = 27;

//Add loading screen again because why not/
alert("Beep..Boop..Boop..Loading answer!");

//Devide the total amount of cubic feet entered by 27 cubic feet.
alert("You will need " +fontDimensions[0] * +fontDimensions[1] * +fontDimensions[2] / +endResult +" cubic yards.");
//Make final output
console.log("You will need " +fontDimensions[0] * +fontDimensions[1] * +fontDimensions[2] / +endResult +" cubic yards.");
















