/*/**
 * Created by ColterWilliams on 5/25/15.
 * Functions_Worksheet
 * Section 01
 */

//PROBLEM 1: Calculate the circumference of a circle!

//Create a variable for diameter.
var diameter = 2;

//Create variable for Radius.
var radius = 15;

//Create variable for Pi.
var pi = 3.14;

//Create variable for circumference
var circumference = calculateCircumference(diameter,radius,pi);
//create console.log for the circumference of a circle is-
console.log("The circumference of a circle is " +circumference);

//create function for calculating the circumference. place arguments.
function calculateCircumference(d,r,p){
    return d * r * p; //create return for result. 2X15X3.14= circumference of a circle
}


//PROBLEM 2:

//create variable for vitims weight(in pounds)
var victimWeightInPounds = 150;
//create variable for number of bee stings per pound
var stingsPerPound = 8.666666667;
