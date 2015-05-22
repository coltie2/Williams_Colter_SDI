/* Colter Williams go to training week 3
5-2-15
section 01
 */

//alert("hot muffins"); //alert worked fine.

//create a calculator that keeps track of how many
//are in a fruit bowl.

//create our virtual fruit bowl as an array
var bowlOfFruit = ["apple","banana","pear","peach","pear","tamato","plum","pear","kiwi","pear"];
alert(bowlOfFruit);
//print out the whole array
console.log(bowlOfFruit);

//print out a specific fruit, use the index number.
//indexs numbers start with 0 not 1.
console.log(bowlOfFruit[1]);

//how many items are inside of the array.
//property of an array called length.
//Dot syntax - fancy for use a period.
console.log(bowlOfFruit.length); //10

//create a variable to count the number of pears in the array
var totalNumPears = 0;

//test each fruit "item in the array" to see if it is a pear

//if(conditional to test) {code that will run if the condition is true}

if(bowlOfFruit[0]==="pear"){
    //code inside of here will run IF that item is a pear
    console.log("This item is a pear");
    //add 1 to the total number of pears
    totalNumPears++; //adds one to the current value variable
} else {
    //code inside of here will run IF the item is NOT a pear.
    console.log("Item is not a pear.");
}

//test the second item in the array
if(bowlOfFruit[1]==="pear"){
    //code inside of here will run IF that item is a pear
    console.log("This item is a pear");
    //add 1 to the total number of pears
    totalNumPears++; //adds one to the current value variable
} else {
    //code inside of here will run IF the item is NOT a pear.
    console.log("Item is not a pear.");
}

//test 3rd item
if(bowlOfFruit[2]==="pear"){
    //code inside of here will run IF that item is a pear
    console.log("This item is a pear");
    //add 1 to the total number of pears
    totalNumPears++; //adds one to the current value variable
} else {
    //code inside of here will run IF the item is NOT a pear.
    console.log("Item is not a pear.");
}

//test 4th item
if(bowlOfFruit[3]==="pear"){
    //code inside of here will run IF that item is a pear
    console.log("This item is a pear");
    //add 1 to the total number of pears
    totalNumPears++; //adds one to the current value variable
} else {
    //code inside of here will run IF the item is NOT a pear.
    console.log("Item is not a pear.");
}

//now have to add a test for the 5th
if(bowlOfFruit[4]==="pear"){
    //code inside of here will run IF that item is a pear
    console.log("This item is a pear");
    //add 1 to the total number of pears
    totalNumPears++; //adds one to the current value variable
} else {
    //code inside of here will run IF the item is NOT a pear.
    console.log("Item is not a pear.");
}
//console log the total number pears.
console.log(totalNumPears+" total number of pears in the fruit bowl.");

//cycling through arrays, for loop
/*
for (initilize a counting variable; condition to test; increment of change to counting variable;) {
code to run for each loop
}
 */



//create a new variable to track the number of pears in an array
var pearsTotal = 0;


//++ means add 1
for(var i=0; i<bowlOfFruit.length; i++){
    //code to run each loop
    console.log("the value of i is "+i);
    //log each item in an array
    console.log(bowlOfFruit[i]);

    //test each item in the array if it is a pear
    if(bowlOfFruit[i]==="pear"){
       console.log("item is a pear!")
        //add one to total
        pearsTotal++;
    } else {
        console.log("not a pear");
    }

}

console.log("the total number of pears in the bowl is "+pearsTotal);









//validate user prompts
//ask user for imput
var userInput = prompt("please type in your name");

// validate prompt to see if blank
if(userInput===""){
    //code will run if user leaves it blank
    //re-prompt the user using the SAME variable above
    userInput=prompt("please do not leave your name blank");
}

//ask for a number and test if that is what the user typed in
//assume users are stupid..
var numInput = prompt("type in ANY number");

if(isNaN(numInput)){
    //code will run if the user does not type in a number
    //reprompt using the same variable.
    numInput=prompt("please only use numbers. \nType in ANY number!");

}console.log(isNaN("cat")); //is a text string of cat not a number // true
console.log(isNaN(7)); //is the text string of seven not a number false




var thirdPrompt = prompt("type in a number");

//valiate for BOTH blank and a number
if(thirdPrompt==="" || isNaN(thirdPrompt)){

    thirdPrompt=prompt("please do not leave blank and only use numbers.\nType in a number");

}
