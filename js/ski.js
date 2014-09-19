// Conditionals Personal - Vacation Planner - Ski Script

var mySkiChoice = prompt(" I see you like to ski. Do you like the Alaskan slopes, or do you like the Russian slopes? Please type (Alaska) or (Russia)."); // user enters "Alaska" or "Russia".
// the below switch statement allows the user to make a choice.
switch (mySkiChoice) {
    case "Alaski": // if case matches "Alaska" typed by user, an appropriate action will occur.       
window.location="alaskaski.htm" // if user types "Alaska", the browser will load the appropriate page.
break; // haults the JavaScript code.
    case "Russki": // if case matches "Russia" typed by user, an appropriate action will occur.
window.location="russiaski.htm" // if user types "Russia", the browser will load the appropriate page.
break; // haults the JavaScript code.

default : alert("Please choose (Alaska) or (Russia)"); // if user types anything other than the key words, this alert will display to the page.
}