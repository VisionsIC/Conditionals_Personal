//Conditionals Personal - Vacation Planner.

var myTempChoice = prompt("Do you prefer to travel to destinations that are hot or cold? Please choose (hot) or (cold). "); //user enters hot or cold.

switch (myTempChoice) {
    case "hot":        
window.location="hot.html"
break;
    case "cold":
window.location="cold.html"
break;
default : alert("Please refresh the browser page and choose (hot) or (cold). ");
    }
