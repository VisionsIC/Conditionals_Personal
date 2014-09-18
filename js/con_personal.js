//Conditionals Personal - Vacation Planner.
var myTempChoice = prompt("Do you prefer to travel to destinations that are hot or cold? "); //user enters hot or cold.

var myHotChoice = prompt("I see. Do you like the beach, or do you like to golf? "); //user enters beach or golf.

var myBeachChoice = prompt("I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); //user enters ski or hike.
var myGolfChoice = prompt("I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); //user enters ski or hike.

var myCaribbChoice = prompt("I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); //user enters ski or hike.
var myPacifChoice = prompt("I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); //user enters ski or hike.

var myColdChoice = prompt("I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); //user enters ski or hike.

var mySkiChoice = prompt("I see. Do you like the beach, or do you like to golf? "); //user enters beach or golf.
var myGlacierChoice = prompt("I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); //user enters ski or hike.

var myAlaskaChoice = prompt("I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); //user enters ski or hike.
var myPadagoniaChoice = prompt("I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); //user enters ski or hike.


var coldArray = new Array ( pctN1, pctN2, pctN3, pctN4, pctN5, pctN6, pctN7, pctN8 ); // injects all the prompt variables (patients) into the new array.
var hotArray = new Array ( pctN1, pctN2, pctN3, pctN4, pctN5, pctN6, pctN7, pctN8 ); // injects all the prompt variables (patients) into the new array.

var pctArray = new Array ( pctN1, pctN2, pctN3, pctN4, pctN5, pctN6, pctN7, pctN8 ); // injects all the prompt variables (patients) into the new array.
var totalPat = pctArray; // groups the patients entered into the array to pass to console.

if (myTempChoice == "hot") {
    myTempChoice = myHotChoice;
    }
alert (myHotChoice);

else if (myTempChoice == "cold") {
         myTempChoice = myColdChoice;
    }
alert (myColdChoice);

else {block of code to be executed if the condition1 is false and condition2 is false}


var myGPD = myMiles / myMPG; // calculates the miles driven divided by the vehicle's miles per gallon.
//console.log(myGPD); //prints out to the console.
var resultGPD = "You use roughly " + myGPD + " Gallons of gas per day to drive to work."; //Javascript accumulates the totals.
alert(resultGPD); // outputs the result in an alert box in the browser.
var myDays = prompt("How many days do you work per week? Please enter the total days."); //user enters the weekly amount of days they work.
var myGTY = myDays * myGPD; // calculates the total of yealy days multiplied by the vehicle's gallons per day.
//console.log(myGTY); //prints out to the console.
var resultGTY = "You use roughly " + myGTY + " Gallons of gas per year to drive to work. "; //Javascript accumulates the totals
alert(resultGTY); // outputs the result in an alert box in the browser.
var myGPrice = prompt("How much is the cost of a gallon of gas at your local gas station? Enter the Price Per Gallon. $ "); //user enters the price of gas per gallon.
myFloat = parseFloat(myGPrice); // allows the user to input a number with a decimal value.
var myGETY = myFloat * myGTY; // calculates the total of yearly cost of gas.
var myConvert = parseInt (myGETY); // changes the result to an intereger. 
//console.log(myGETY); //prints out to the console.
var resultGETY = "You use roughly $ " + myConvert + " Dollars of your hard earned cash per year to drive to work. "; //Javascript accumulates the totals.
alert(resultGETY); // outputs the result in an alert box in the browser.