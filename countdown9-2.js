"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 2

   Countdown Clock
   Author: Ethan Jay  
   Date: 05/26/2023   


*/

var secsLeft = 10;
var clockID = setInterval(countdown, 1000);

function countdown() {
  var secsString = addLeadingZero(secsLeft);
  document.getElementById("seconds").innerHTML = secsString;
	checkCountdown();
	secsLeft--;
	console.log("hellp");
}

function stopCountdown()
{
	document.getElementById("Alert").innerHTML = "Time's Up";
	clearInterval(clockID);
}

/* ------------------------------------------------- */


/* The checkCountdown() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkCountdown() {
   if (secsLeft === 0) stopCountdown();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}

