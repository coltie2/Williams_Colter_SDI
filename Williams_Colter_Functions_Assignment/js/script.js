/*/**
 * Created by Colter Williams
 * 5/26/15
 * Section 01
 * Williams_Colter_Functions_Assignment
 */


//created test to see if html is connected
//alert('testing 1,2,3');

//create hello
alert("Loading the worlds finest body weight calculator!");

//create welcome calculator alert
alert("Welcome to the BodMaster. This calculator will help you calculate how many pounds you have gained/lose and then tell you what that percentage of weight change is. ");

//create variable for old weight (pounds)
var oldWeight = prompt("Enter your old weight in pounds.");

//validate for BOTH blank and a number using a while loop
while (oldWeight==="" || isNaN(oldWeight)){

    oldWeight = prompt("please do not leave blank and only use numbers.\nType in a number.");

}

//create variable for current weight (pounds)
var currentWeight = prompt("Enter your current weight in pounds.");

//validate for BOTH blank and a number using a while loop
while (currentWeight==="" || isNaN(currentWeight)) {

    currentWeight = prompt("please do not leave blank and only use numbers.\nType in a number.");
}

//create percent is 100 variable
var percent100 = 100; //this WILL be used to turn weight change into a percent of weight change.

//loading screen for fun
alert("Processing information! One moment Please.");

//create function variable for weight
var resultWeight = calculateWeight(currentWeight,oldWeight);

//send info to the console
console.log("Your weight change is " +resultWeight +" pounds.");

//alert the user what their weight change is in pounds
alert("Your weight change is " +resultWeight +" pounds.");

//create first function
function calculateWeight(c,o){
      return c - o;
}

//prompt the user to input the weightchange number that was given to them
var weight = prompt("Enter the weight change the calculator just gave to you. Now the calculator will tell you your percent of weight change.");

//valiate for BOTH blank and a number using a while loop
while (weight==="" || isNaN(weight)) {

   weight = prompt("please do not leave blank and only use numbers.\nType in a number.");
}

//loading screen for fun
alert("Processing information! One moment Please.");

//create variable to use in the anonymous function//second function with 3 parameters.
var resultPercent = function(w,ow,p){ //3 parameters
    var result = w / ow * p; //code the function runs//basically this is the amount of weight received from the function above / old weight * 100 to be given the percent of your weight change.
    return result;
};
//create variable a = resultPercent
var a = resultPercent(weight,oldWeight,percent100);

//send info to the console (weight change percent)
console.log("Your percent of weight change is " +a +"%.");

//alert to show the user their final result
alert("Your percent of weight change is " +a +"%.");

//create goodbye alert
alert("Thank you for using the BodMaster, please come again soon!");

/* So to test my calculator I typed in 150 as my old weight, and 155 as my current weight.
The calculator said i've gained 5 pounds. Next the calculator asked me to type in the weight change it gave me.
So I typed in 5 and it turned that 5 pounds into a percentage of weight gained which was 3.33333%.
The calculator 100% works:) woohoooo.
 */


//TACOS TACOS TACOS

//monkeys
