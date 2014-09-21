//Conditionals Personal - Vacation Planner - Golf script

var myGolfChoice = prompt(" I see you like to golf. Pebble Beach, or Key West Golf? Please type (Pebble Beach) or (Key West). "); // user enters "Pebble Beach" or "Key West".
// the below switch statement allows the user to make a choice.
switch (myGolfChoice) {
    case "Pebble Beach": // if case matches "Pebble Beach" typed by user, an appropriate action will occur.       
window.location="pebblebeach.html" // if user types "Pebble Beach", the browser will load the appropriate page.
break; // haults the JavaScript code.
    case "Key West": // if case matches "Key West" typed by user, an appropriate action will occur.
window.location="keywest.html" // if user types "Key West", the browser will load the appropriate page.
break; // haults the JavaScript code.
default : alert("Please refresh the browser page and choose (Pebble Beach) or (Key West). "); // if user types anything other than the key words, this alert will display to the page.
}