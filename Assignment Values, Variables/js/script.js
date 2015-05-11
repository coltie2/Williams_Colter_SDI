// Variables of Different Types, numbers booleans and strings

var age = 19; // Number Variable

var isStudent = false; //Boolean Variable

var firstName = "Kermit"; // Variable name string

var phrase = 'I don/'t know /n you/'ll have to speak to the professor'

// Arrays

var muppetNames = ["Kermit", "Miss Piggy", "Gonzo", "Rizzo"]; //indexes 0,1,2,3

console.log(muppetNames[0]); // what ever index you put in the console log array it shows up when you run it

//Basic expressions

var a = 2; //sets up our variable a and defines it with 2
var b;
b = a + 3; // add 3 to a
console.log(a);

//Expressions- Age example

var yearBorn = 1995;
var age = 2015 - yearBorn;
console.log(age); // basically figures out your age 2015 - when I was born

// Expression- arithmetic operators
// Area of the triangle is half of the width times the height
var width = 8;
var height = 7;
var area = width * height/2;
console.log(area);

//Expressions- modulo operator

var remainder = 212 % 2;
console.log(remainder);



//expressions - PEMDAS- the order of operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// the average is the sum of items divided by the number of items

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log(average);
//console.log(average);

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.logperimeter);

// expressions - expressions with arrays

var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2]; // adding the 2 index
console.log(total); // it will add up in browser to 1684


// expressions - concatenating strings (combining)

var firstName = "Colter";
var lastName = "Williams";
var fullName = firstName + lastName;

console.log(fullName);

//new problem thats concatenating

var a= "6";
var b = "7";

var result = a + b;
console.log(result);


//Casting

var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);

//new casting example
var areaCode = 407; // (407) 203-4529
var firstPart = 203;
var secPart = 4529;

var phoneNo = String(areaCode) + String(firstPart) + String(secPart);
console.log(phoneNo);


//expressions- assignment operators

var a = 3;
a += 4; // same as a = a + 4
console.log(a);

// prompt and alert

var userInput = prompt("Enter your year of birth");
console.log(userInput);
//new prob multiple prompts
var width = prompt("we are calculating the area of a rectangle please enter the width");
var height = prompt("please enter the height";)
var area = width * height;
console.log(area);
