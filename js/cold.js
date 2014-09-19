// Conditionals Personal - Vacation Planner - Cold script

var myColdChoice = prompt(" I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); // user enters "ski" or "hike".
// the below switch statement allows the user to make a choice.
switch (myColdChoice) {
    case "ski": // if case matches "ski" typed by user, an appropriate action will occur.      
window.location="ski.html" // if user types "ski", the browser will load the appropriate page.
break; // haults the JavaScript code.
    case "hike": // if case matches "hike" typed by user, an appropriate action will occur. 
window.location="hike.html" // if user types "hike", the browser will load the appropriate page.
break; // haults the JavaScript code.

default : alert("Please choose (ski) or (hike)"); // if user types anything other than the key words, this alert will display to the page.
}