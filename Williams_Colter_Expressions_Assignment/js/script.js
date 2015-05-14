/*
Colter Williams
5-13-15
Section 01
Williams_Colter_Expressions_Assigment.
 */

//Create welcome alert.
alert("Welcome to the cement calculator!");
//Create an alert explaining what this calculator will do.
alert("This calculator will help you determine the cubic feet needed to complete your project and convert the cubic feet to cubic yards when ordering your cement.");

//Create variables for width, length, and depth.
var width = prompt("Please enter your width in feet:(do not put the foot symbol after your number).");
console.log(width);
var length = prompt("Please enter your length in feet:(do not put the foot symbol after your number).");
console.log(length);
var depth = prompt("Please enter your depth in feet:(do not put the foot symbol after your number).");
console.log(depth);

//Add loading screen joke
alert("Beep..Boop..Boop..Loading answer!");

//Create a array using the variables above(width,length,depth) an label it foot dimensions.
footDimensions = [width,length,depth]; // 0,1,2

//Create an alert and times the 3 parts of the array together to get how many cubic feet you have.
 alert("You have " +footDimensions[0] * +footDimensions[1] * +footDimensions[2] +" cubic feet!");
//Use console.log to track numbers.
console.log("You have " +footDimensions[0] * +footDimensions[1] * +footDimensions[2] +" cubic feet!");

//Cement is ordered by the cubic YARD so we must now convert cubic "feet" to cubic YARDS.
// 1 cubic yard is 27 cubic feet
alert("Since cement is ordered by the cubic yard, this calculator will now give you how many cubic yards you will need.");

//Create variable labeled totalDimensions to apply to "x".
var totalDimensions = footDimensions[0] * +footDimensions[1] * +footDimensions[2];

//Create var x and make it equal totalDimensions like stated above.
var x = totalDimensions;
//x(totalDimensions) / 27 which gives you how many cubic yards are needed.
x /= 27;

//Add loading screen again because why not.
alert("Beep..Boop..Boop..Loading answer!");

//Divide the total amount of cubic feet entered by 27 cubic feet. Because as stated before in notes 1 cubic yard is 27 cubic feet.
    alert("You will need " +x+ " cubic yards.");
//Make final output
console.log("You will need " +x+ " cubic yards.");

//Make goodbye alert.
alert("Thank you for using the cement calculator. Please come again.");
//MY CHECK OF THE CALCULATOR.
/* I typed in 15 for height, 20 for length, and .33 for depth.
 The calculator gave me 99 cubic feet.
 The calculator then turned the 99 cubic feet into cubic yards.
 The calculator told me I needed 3.66 cubic yards of cement to cpmplete my project.
 */




//METHOD WITHOUT /= ASSIGNMENT OPERATOR FOR 27. USES NORMAl = AND A VAR FOR 27. (ALSO WORKS).
//
//
//
/*//Create welcome alert.
alert("Welcome to the cement calculator!");
//Create an alert explaining what this calculator will do.
alert("This calculator will help you determine the cubic feet needed to complete your project and convert the cubic feet to cubic yards when ordering your cement.");

//Create variables for width, length, and depth.
var width = prompt("Please enter your width'(in feet):");
console.log(width);
var length = prompt("Please enter your length'(in feet):");
console.log(length);
var depth = prompt("Please enter your depth'(in feet):");
console.log(depth);

//Add loading screen joke
alert("Beep..Boop..Boop..Loading answer!");

//Create a array using the variables above(width,length,depth) an label it foot dimensions.
footDimensions = [width,length,depth]; // 0,1,2

//Create an alert and times the 3 parts of the array together to get how many cubic feet you have.
alert("You have " +footDimensions[0] * +footDimensions[1] * +footDimensions[2] +" cubic feet!");
//Use console.log to track numbers.
console.log("You have " +footDimensions[0] * +footDimensions[1] * +footDimensions[2] +" cubic feet!");

//Cement is ordered by the cubic YARD so we must now convert cubic "feet" to cubic YARDS.
// 1 cubic yard is 27 cubic feet
alert("Since cement is ordered by the cubic yard, this calculator will now give you how many cubic yards you will need.");
*/

/*
 //Create variable for 27 cubic feet.
 var endResult = 27; //This isn't needed after applying the /= assignment operator below. But it was in my original method.
 */
//Add loading screen joke
//alert("Beep..Boop..Boop..Loading answer!");

/*
//Divide the total amount of cubic feet entered by 27 cubic feet. Because as stated before in notes 1 cubic yard is 27 cubic feet.
alert("You will need " +footDimensions[0] * +footDimensions[1] * +footDimensions[2] / +endResult +" cubic yards.");
//Make final output
console.log("You will need " +footDimensions[0] * +footDimensions[1] * +footDimensions[2] / +endResult +" cubic yards.");
*/














