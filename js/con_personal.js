//Conditionals Personal - Vacation Planner.

var myTempChoice = prompt("Do you prefer to travel to destinations that are hot or cold? "); //user enters hot or cold.

switch (myTempChoice) {
    case "hot":        
window.location="hot.htm"
break;
    case "cold":
window.location="cold.htm"
break;
default : alert("Please choose (hot) or (cold)");
    }
