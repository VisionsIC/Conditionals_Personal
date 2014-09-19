//Conditionals Personal - Vacation Planner.

var myTempChoice = prompt("Do you prefer to travel to destinations that are hot or cold? "); //user enters hot or cold.

var imHot = "hot"
var myHotChoice = prompt("I see. Do you like the beach, or do you like to golf? "); //user enters beach or golf.
var hotBeach = "beach"
var myBeachChoice = prompt(" I see you like the beach. Do you like the Carribean beaches, or do you like the Pacific beaches? Please type (Carribbean) or (Pacific)."); //user enters beach or golf.
var beachCarrib = "Carribbean"
var myCarribChoice = " You would love to kick back and enjoy a vacation here! " + carribPic + " Have some fun in the sun! "; // Javascript displays the totals.
var beachPacif = "Pacific"
var myPacifChoice = " You would love to kick back and enjoy a vacation here! " + pacifPic + " Have some fun in the sun! "; // Javascript displays the totals.
var hotGolf = "golf"
var myGolfChoice = prompt(" I see you like to golf. Pebble Beach, or Key West Golf? Please type (Pebble Beach) or (Key West)."); //user enters beach or golf.
var golfKW = "Key West"
var myPBChoice = "You would love to kick back and enjoy a vacation here!" + kwPic + "Have some fun in the sun!"; // Javascript displays the totals.
var golfPB = "Pebble Beach"
var myTGChoice = "You would love to kick back and enjoy a vacation here!" + pbPic + "Have some fun in the sun!"; // Javascript displays the totals.

var imCold = "cold"
var myColdChoice = prompt(" I see. Do you like to ski mountain tops, or do you like to hike on glaciers? "); //user enters beach or golf.
var coldSki = "ski"
var mySkiChoice = prompt(" I see you like to ski. Do you like the Alaska slopes, or do you like the Russia slopes? Please type (Alaski) or (Russki)."); //user enters beach or golf.
var skiAlaska = "Alaski"
var myAlaskiChoice = " You would love to kick back and enjoy a vacation here! " + saPic + " Have some fun in the sun! "; // Javascript displays the totals.
var skiRussia = "Russki"
var myRusskiChoice = " You would love to kick back and enjoy a vacation here! " + srPic + " Have some fun in the sun! "; // Javascript displays the totals.
var coldHike = "hike"
var myHikeChoice = prompt(" I see you like to hike. Alaskan Wilderness, or Patagonian Glacier Shelf? Please type (Alaska) or (Patagonia)."); //user enters beach or golf.
var myAHChoice = " You would love to kick back and enjoy a vacation here! " + ahPic + " Have some fun in the sun! "; // Javascript displays the totals.
var myPHChoice = " You would love to kick back and enjoy a vacation here! " + phPic + " Have some fun in the sun! "; // Javascript displays the totals.

if (myTempChoice == imHot) {
    myTempChoice = myHotChoice;
    alert (myHotChoice);
    }

else if (myTempChoice == imCold) {
    myTempChoice = myColdChoice;
    alert (myColdChoice);
    }

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


