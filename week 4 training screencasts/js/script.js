/*/**
 * Created by ColterWilliams on 5/25/15.
 */

//Functions - Function Execution

/*function outputMsg(){
    console.log("Hello World");
}
*/





//functions variable scope

/*var width = 5;


function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea(); //if you say calcArea(); again it will repeat the answer.
*/




//functions - parameters and arguments, returning values

/*var total = calcArea(30, 20);

function calcArea(w, h){
    var area = w * h;
    return area; //function is spitting the information out
}
console.log(total);
*/




/*//DOG YEAR FUNCTION

function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old");
}
var age1 = 4;
dogYears(age1);
dogYears(6);
dogYears(5); //what ever number you put in here it goes applys to the function
*/





//Functions vs procedure
//This is a function
/*function calcArea(width, height){
    var area = width * height;
    return area;
}

//this is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}
    */

//functions - anonymous functions

var calcArea = function(width, height){ //defining
    //code the function runs
    var area = width * height;
    return area;
}
var a = calcArea(20, 30); //invoking

console.log(a);
