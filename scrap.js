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

var myHotChoice = prompt("I see. Do you like the beach, or do you like to golf? "); //user enters beach or golf.
var myColdChoice = prompt(" I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); //user enters beach or golf.

switch (myHotChoice) {
    case "beach":
    alert (myBeachChoice);
    case "golf":
    alert (myGolfChoice);    
    }

   

var myCarribChoice = " You would love to kick back and enjoy a vacation here! " + carribPic + " Have some fun in the sun! "; // Javascript displays the totals.
var myPacifChoice = " You would love to kick back and enjoy a vacation here! " + pacifPic + " Have some fun in the sun! "; // Javascript displays the totals.

switch (myBeachChoice) {
    case "Carribbean":
    alert (myBeachChoice);
    case "Pacific":
    alert (myGolfChoice);    
    }
    
var hotBeach = "beach"
var beachCarrib = "Carribbean"
var beachPacif = "Pacific"
var hotGolf = "golf"
var golfKW = "Key West"
var myPBChoice = "You would love to kick back and enjoy a vacation here!" + kwPic + "Have some fun in the sun!"; // Javascript displays the totals.
var golfPB = "Pebble Beach"
var myTGChoice = "You would love to kick back and enjoy a vacation here!" + pbPic + "Have some fun in the sun!"; // Javascript displays the totals.

var imCold = "cold"
var coldSki = "ski"
var skiAlaska = "Alaski"
var myAlaskiChoice = " You would love to kick back and enjoy a vacation here! " + saPic + " Have some fun in the sun! "; // Javascript displays the totals.
var skiRussia = "Russki"
var myRusskiChoice = " You would love to kick back and enjoy a vacation here! " + srPic + " Have some fun in the sun! "; // Javascript displays the totals.
var coldHike = "hike"
var myAHChoice = " You would love to kick back and enjoy a vacation here! " + ahPic + " Have some fun in the sun! "; // Javascript displays the totals.
var myPHChoice = " You would love to kick back and enjoy a vacation here! " + phPic + " Have some fun in the sun! "; // Javascript displays the totals.




if (myHotChoice == hotBeach) {
    myHotChoice = myBeachChoice;
    alert (myBeachChoice);
    }

if (myBeachChoice == beachCarrib) {
    myBeachChoice = myCarribChoice;
    
    alert (myCarribChoice);
    }
else if (myBeachChoice == beachPacif)
{
    myBeachChoice = myPacifChoice;
    alert (myPacifChoice);
    }

if (myHotChoice == hotGolf) {
    myGolfChoice = myPBChoice;
    alert (myPBChoice);
    }

else if (myHotChoice == hotGolf) {
    myGolfChoice = myTGChoice;
    alert (myTGChoice);
    }

if (myBeachChoice == beachCarrib) {
    myBeachChoice = myCarribChoice;
    alert (myCarribChoice);
    }

if (myBeachChoice == beachCarrib) {
    myBeachChoice = myCarribChoice;
    alert (myCarribChoice);
    }


