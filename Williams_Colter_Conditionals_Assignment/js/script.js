/*/**
 * Created by Colter Williams
 * 5/21/15
 * Williams_Colter_Conditionals_Assignment
 * Section 01
 */

//name the calculator
alert("Welcome to the party master5000!");

//Create an alert stating what this calculator does
alert("Your child has been invited to a private 0-6 year old birthday party. This calculator will help you determine where your child sits at the party and how much money your child will need to bring to the party.");

//prompt what is the name of the child attending.
var parentName = prompt("What is the parents name of the child attending the party?");

//validate prompt to see if the wording is blank
if(parentName==="") {
    childname = prompt("Please do not leave your name blank");
}

//alert the name of the users child as a greeting
alert("Hello "+parentName +" lets figure out what table your child will be sitting at the party and how much money you will need to bring for your child.");

//prompt age for the users kid.
var childAge = prompt("Please enter your child's age (Must Be 0-6 years old, no older).");
//console log the age
console.log(childAge);

//validate for blank and a number
if(childAge==="" || isNaN(childAge)) {
   childAge = prompt("Please do not leave this blank. And fill it out only using numbers.\nType in a number");
}

//create variable for age requirement( we don't want any kids over 6 years old attending this party.
var ageReq = (childAge <= 6) ? "Your child's age is welcome to the party." : "Your child's age is to old for the party. Please ignore the following steps in the calculator because your child is not invited.";
//send the ageReq to the console
console.log(ageReq);
//alert the user their child is ok to come to the party, or if their child is over age.
alert(ageReq);

// set meaning to the numbers listed below.
ageSix = "6";
ageFive = "5";
ageFour = "4";
ageThree = "3";
ageTwo = "2";
ageOne = "1";
ageZero = "0";


//make a if else if statement to show what table to users child sits at.
//if child is 6 the child will sit at table A.
if(childAge === "6"){
    console.log("Your " +childAge +" year old will be sitting at table A. Which is for 5-6 year old kids.");
    alert("Your " +childAge +" year old will be sitting at table A. Which is for 5-6 year old kids.");

//if the child is 5 the child will sit at table A.
}else if(childAge === "5"){
    console.log("Your " +childAge +" year old will be sitting at table A. Which is for 5-6 year old kids.");
    alert("Your " +childAge +" year old will be sitting at table A. Which is for 5-6 year old kids.");

//if the child is 4 the child will sit at table B.
}else if(childAge === "4"){
    console.log("Your " +childAge +" year old will be sitting at table B. Which is for 3-4 year old kids.");
    alert("Your " +childAge +" year old will be sitting at table B. Which is for 3-4 year old kids.");

//if the child is 3 the child will sit at table B.
}else if(childAge === "3"){
    console.log("Your " +childAge +" year old will be sitting at table B. Which is for 3-4 year old kids.");
    alert("Your " +childAge +" will be sitting at table B. Which is for 3-4 year old kids.");

//if the child is 2 the child will sit at table C.
}else if(childAge === "2"){
    console.log("Your " +childAge +" year old will be sitting at table C. Which is for 0-2 year old kids.");
    alert("Your " +childAge +" year old will be sitting at table C. Which is for 0-2 year old kids.");

//if the child is 1 the child will sit at table C.
}else if(childAge === "1"){
    console.log("Your " +childAge +" year old will be sitting at table C. Which is for 0-2 year old kids.");
    alert("Your " +childAge +" year old will be sitting at table C. Which is for 0-2 year old kids.");

//if the child is 0(infants) the child will sit at table C.
}else if(childAge === "0"){
    console.log("Your " +childAge +" year old will be sitting at table C. Which is for 0-2 year old kids.");
    alert("Your " +childAge +" will be sitting at table C. Which is for 0-2 year old kids.");

}


//game price
var gamesCost = 2.50;

//drink price
var drinkCost = 3.00;

//prompt how many drinks wanted
var drinksWanted = prompt("How many drinks at the party do you want your child to have? Each drink is $3.00");
//submit drinks wanted to buy to the console
console.log(drinksWanted);

//validate for blank and a number
if(drinksWanted==="" || isNaN(drinksWanted)) {
    drinksWanted = prompt("Please do not leave this blank. And fill it out only using numbers.\nType in a number");
}

//prompt how many games wanted to play
var gamesWanted = prompt("How many games at the party do you want your child to play? Each game is $2.50");
//submit games wanted to play to the console
console.log(gamesWanted);

//validate for blank and a number
if(gamesWanted==="" || isNaN(gamesWanted)) {
    gamesWanted = prompt("Please do not leave this blank. And fill it out only using numbers.\nType in a number");
}


//alert food is free
alert("Food is supplied for free at the party, don't worry your child won't starve.");

//gameswanted * gamecost = how much money needed for games.
var gameMoney = gamesWanted * +gamesCost;

//drinkswanted * drinkcost = how much money needed for drinks.
var drinkMoney = drinksWanted * +drinkCost;

//gamemoney + drinkmoney = total money needed at the party.
var totalMoneyNeeded = gameMoney + drinkMoney;

//console.log the result
console.log("The total amount of money you will need to bring to the party is $"+totalMoneyNeeded +".");

//alert the user with the result.
alert("The total amount of money you will need to bring to the party is $"+totalMoneyNeeded +".");

//alert goodbye
alert("Thank you for using the party master5000!");


/* I tested my code by entering my name (Colter) as the parents name.
Then I selected that my child is 4 years old.
The calculator placed my child in table B which is for 3-4 year olds.
Then I selected I want my child to buy 3 drinks and play 10 games.
The calculator told me I will need to bring 34$ to the party. I also did the math on my calculator and it
came out the same.
code successful :) wooohoo
 */


