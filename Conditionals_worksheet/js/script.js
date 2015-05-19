/*/**
 * Created by ColterWilliams on 5/19/15.
 */
//Conditionals Worksheet

//alert("testing..french of the frys");


/*var celsius = prompt("Please enter celsius");
console.log(celsius);
var fahrenheit = prompt("Please enter fahrenheit");
console.log(fahrenheit);

var temps = [celsius, fahrenheit]; //0, 1



thirtyTwo = 32;
nineFive = 9/5;
fiveNine = 5/9;

// calsius to fahrenheit
var celsiusResult = thirtyTwo + +nineFive * +temps[0];
// fahrenheit to celsius
var fahrenheitResult = fiveNine * +thirtyTwo - +temps[1];

alert("The temerature is" +fahrenheitResult +" degrees Celsius. Or the temperature is" +celsiusResult +" degrees Fahrenheit");
console.log("The temerature is" +fahrenheitResult +" degrees Celsius. Or the temperature is" +celsiusResult +" degrees Fahrenheit");
*/

/*//PROBLEM 2:

//First we create the user prompt for the given

var grade = prompt("What is your grade in percent?");

//Then we make the conditional code to test what grade the student gets.

if(grade >= 90){

    console.log("You have a " +grade+ "% which means you have earned a A in the class.");

}else if(grade >= 80){

    console.log("You have a " +grade+ "% which means you have earned a B in the class.");

}else if(grade >= 70){

    console.log("You have a " +grade+ "% which means you have earned a C in the class.");

}else if(grade >= 60){

    console.log("You have a " +grade+ "% which means you have earned a D in the class.");

}else {

    console.log("You have a " +grade+ "% which means you have earned a F in the class.");


}

*/

//PROBLEM 3

//pressure for each tire pressure
var frontOne = prompt("Enter tire pressure for the left front tire");
var frontTwo = prompt("Enter tire pressure for the right front tire");
var backOne = prompt("Enter tire pressure for the back left tire");
var backTwo = prompt("Enter tire pressure for the back right tire");
var result;
// create an array for the tire pressures.
var allTires = [frontOne,frontTwo,backOne,backTwo]; //0,1,2,3
//create conditional output
result = (allTires[0] +allTires[1] +allTires[2] +allTires[3] > 34 ) ? "The tires pass spec!" : "Get your tires checked out!";
console.log(result);













/*if(frontOne = 32){
    console.log("The tire passes spec");

}else {
    console.log("The tire needs to be checked");
}
if(frontTwo = 32){
    console.log("The tire passes spec");

}else {
    console.log("The tire needs to be checked");
}
if(backOne = 34) {
    console.log("The tire passes spec");

}else {
   console.log("The tire needs to be checked");
}
if(backTwo = 34){
    console.log("The tire passes spec");

}else {
    console.log("The tire needs to be checked");
}

result = (allTires > 35) ? "The tires pass spect!" : "Get your tires checked out!";
console.log(result);
*/




