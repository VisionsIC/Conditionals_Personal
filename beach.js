//Conditionals Personal - Vacation Planner - Beach script

var myBeachChoice = prompt(" I see you like the beach. Do you like the Carribean beaches, or do you like the Pacific beaches? Please type (Caribbean) or (Pacific)."); // user enters "Caribbean" or "Pacific".
// the below switch statement allows the user to make a choice.
switch (myBeachChoice) {
    case "Carribbean": // if case matches "Caribbean" typed by user, an appropriate action will occur.       
window.location="caribbeanbeach.htm" // if user types "Caribbean", the browser will load the appropriate page.
break; // haults the JavaScript code.
    case "Pacific": // if case matches "Pacific" typed by user, an appropriate action will occur.
window.location="pacificbeach.htm" // if user types "Pacific", the browser will load the appropriate page.
break; // haults the JavaScript code.
default : alert("Please choose (Caribbean) or (Pacific)"); // if user types anything other than the key words, this alert will display to the page.
}