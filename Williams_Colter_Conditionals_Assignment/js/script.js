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

