/*/**
 * Created by ColterWilliams on 5/21/15.
 */


//Create an alert stating what this calculator does
alert("Your child has been invited to a private 0-6 year old birthday party. This calculater will help you determine where your child sits at the party and how much money your child will need to bring to the party.");

//prompt what is the name of the child attending.
var childName = prompt("What is the name of the child attending the party?");

// validate prompt to see if blank
if(childName==="") {
    //code will run if user leaves it blank
    //re-prompt the user using the SAME variable above
    childName = prompt("please do not leave your name blank");
}
//alert the name of the users child as a greeting
alert("Hello " +childName +" lets figure out what table you will be sitting at the party and how much money you will need to bring") ;

//prompt age for the users kid.
var childAge = prompt("Please enter your child's age");
//console log the age
console.log(childAge);

    //valiate for BOTH blank and a number
    if(childAge==="" || isNaN(childAge)) {

        childAge = prompt("please do not leave blank and only use numbers.\nType in a number");
    }

//create variable for age requirement( we don't want any kids over 6 years old attending this party.
var ageReq = (childAge <= 6) ? "Your child is welcome to the party" : "Your child is to old for the party";
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

//validate for blank and a number
if(drinksWanted==="" || isNaN(drinksWanted)) {
    drinksWanted = prompt("Please do not leave this blank. And fill it out only using numbers.\nType in a number");
}

//prompt how many games wanted to play
var gamesWanted = prompt("How many games at the party do you want your child to play? Each game is $2.50");

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




