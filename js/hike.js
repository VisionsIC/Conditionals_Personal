// Conditionals Personal - Vacation Planner - Hike Script

var myHikeChoice = prompt(" I see you like to hike. Alaskan Wilderness, or Patagonian Glacier Shelf? Please type (Alaska) or (Patagonia). "); // user enters "Alaska" or "Patagonia".
// the below switch statement allows the user to make a choice.
switch (myHikeChoice) {
    case "Alaska": // if case matches "Alaska" typed by user, an appropriate action will occur.       
window.location="alaskanhike.html" // if user types "Alaska", the browser will load the appropriate page.
break; // haults the JavaScript code.
    case "Patagonia": // if case matches "Patagonia" typed by user, an appropriate action will occur.
window.location="patagoniahike.html" // if user types "Patagonia", the browser will load the appropriate page.
break; // haults the JavaScript code.

default : alert("Please refresh the browser page and choose (Alaska) or (Patagonia). "); // if user types anything other than the key words, this alert will display to the page.
}