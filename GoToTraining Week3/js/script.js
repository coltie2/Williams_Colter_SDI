/* Colter Williams go to training week 3
5-2-15
section 01
 */

//alert("hot muffins"); //alert worked fine.

//create a calculator that keeps track of how many
//are in a fruit bowl.

//create our virtual fruit bowl as an array
var bowlOfFruit = ["apple","banana","pear","peach","pear"];

//print out the whole array
console.log(bowlOfFruit);

//print out a specific fruit, use the index number.
//indexs numbers start with 0 not 1.
console.log(bowlOfFruit[1]);

//how many items are inside of the array.
//property of an array called length.
//Dot syntax - fancy for use a period.
console.log(bowlOfFruit.length);

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

