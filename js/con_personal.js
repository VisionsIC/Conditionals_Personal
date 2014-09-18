//Conditionals Personal - Vacation Planner.
var myTempChoice = prompt("Do you prefer to travel to destinations that are hot or cold? "); //user enters hot or cold.
if (myTempChoice == "hot")
{
roomTemperature = ;
alert(“It’s getting hot in here”);
alert(“Air conditioning switched on”);
}
var myGPD = myMiles / myMPG; // calculates the miles driven divided by the vehicle's miles per gallon.
//console.log(myGPD); //prints out to the console.
var resultGPD = "You use roughly " + myGPD + " Gallons of gas per day to drive to work."; //Javascript accumulates the totals.
alert(resultGPD); // outputs the result in an alert box in the browser.
var myDays = prompt("How many days do you work per week? Please enter the total days.") * 50; //user enters the weekly amount of days they work.
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