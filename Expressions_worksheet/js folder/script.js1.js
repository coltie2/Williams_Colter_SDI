// Colter Williams 5/11/15 Expression Worksheet

//Create variables for Sparky's human age and set it equal to any number.
var humanAge = 2;

//Create variable for dog years which is human age * 7
var dogAge = humanAge * 7;

//Print out the output using concatenation for the variables.
console.log("Sparky is " +humanAge+ " human years old which is " +dogAge+ " in dog years.");


//PROBLEM 2

//Create variables for number of slices per pizza.
var slicesperPizza = 8;

//Create variable for how many people are at the party.
var numberofPeople = 9;

//Create variable for number of pizzas ordered.
var pizzaOrdered = 5;

//Create variable "r" to = pizzaOrdered * slicesperPizza. That will give the total amount of slices.
var r = pizzaOrdered * slicesperPizza;

//Create Result variable "p" to = r / numberofPeople. This will give you how many slices each person gets.
var p = r / numberofPeople;

//Print out the output using concatenation for the variable.
console.log("Each person ate " +p+ " slices of pizza at the party.");



//PROBLEM 3

//Create variable for number of slices per pizza.
var slicesperPizza = 8;

//Create variable for how many people are at the party.
var numberofPeople = 9;

//Create variable for number of pizzas ordered.
var pizzaOrdered = 5;

//Create variable "r" to = pizzaOrdered * slicesperPizza. That will give the total amount of slices.
var r = pizzaOrdered * slicesperPizza;

//Create variable "p" to = r / numberofPeople. This will give you how many slices each person gets.
var p = r / numberofPeople;

//Create variable for WHOLE peices of pizza which is 4.
var wholePeices = 4;

//Create variable to turn 4.44 into .44
var leftoverperPerson = p - wholePeices;

//Create Result variable for what Sparky gets to eat.
var sparkyEats = leftoverperPerson * numberofPeople;

//Print out the output using concatenation for the variable.
console.log("Sparky got " +sparkyEats+ " slices of pizza.");



//PROBLEM 4

//Given:Create and array with 5 weekly grocery totals.
var groceryTotals = [105, 130, 117, 104, 109]; // 0,1,2,3,4

//Create a variable (total) for how much is spent in 5 weeks.
var total = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] +groceryTotals[4];

// Result: create a console.log(total) to find the total amount spend on groceries in a 5 week period.
console.log(total); //adds up to $565

//Result: create a var for averageSpending and make it total / 5.
var averageSpending = total / 5;

//Print out the output using concatenation for the variables.
console.log("You have spent a total of $" +total+ " on groceries over 5 weeks. That is an average of $" +averageSpending+ " per week.");


//PROBLEM 5

//Given:Create variable for original price.
var originalPrice = 20.00;

//Given:Create variable for discounted percentage.
var discountPercentage = .05;

//Given:Create variable for description of item (hat).
var hat = "hat";

//Given:Create variable for sales tax percentage.
var salesTax = .015;

//Create an expression that will take calculate the discount amount.

var discount = originalPrice * discountPercentage; //equals $1

//Result: Create an expression that will calculate the discount price without tax.
var discountPrice = originalPrice - discount; //equals $19

//Result: Discounted item price with tax.
var itemwithTax = discountPrice * salesTax + discountPrice; // equals $19.285

//Print out the output using concatenation for the variables.
console.log("Your " +hat+ " was originally $" +originalPrice+ " but after a " +discountPercentage+ " discount, it is now $" +discountPrice+ " without tax, and $" +itemwithTax+ " with tax.");

























