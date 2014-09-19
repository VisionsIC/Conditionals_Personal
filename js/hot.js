//Conditionals Personal - Vacation Planner - Hot script

var myHotChoice = prompt("I see. Do you like the beach, or do you like to golf? "); // user enters "beach" or "golf".
// the below switch statement allows the user to make a choice.
switch (myHotChoice) {
    case "beach": // if case matches "beach" typed by user, an appropriate action will occur.       
window.location="beach.html" // if user types "beach", the browser will load the appropriate page.
break; // haults the JavaScript code.
    case "golf": // if case matches "golf" typed by user, an appropriate action will occur.
window.location="golf.html" // if user types "golf", the browser will load the appropriate page.
break; // haults the JavaScript code.
default : alert("Please choose (beach) or (golf)"); // if user types anything other than the key words, this alert will display to the page.
}