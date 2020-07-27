function addOption (value) {
	document.write("<option id="+value+"+value="+value+">"+value+"</option>");
}

// import Time.js
import './Time.js';
var t = new Time();

//instead of from 5 to 11,
//lets change this from now to close

for (var i = 5; i < 11; i++) {
	for (var j = 0; j < 4; j++) {
		if (j == 0) {
			addOption(i+":00");
		}
		else if (j == 1) {
			addOption(i+":15");
		}
		else if (j == 2) {
			addOption(i+":30");
		}
		else if (j == 3){
			addOption(i+":45");
		}
	}
}

	var dayField = document.getElementById("day");
	dayField.value = t.month + '-' + t.day + '-' + t.year;


/*
 * check the hour and minutes,
 * hide all the elements in the drop
 * that are before that time 
 * 
 * to hide them, add a viewable="hidden" attribute
 * when the current hour is >= the option's first character
 *
 * for (all the option elements in our select)
 * 		if element[0] 
 

 */

function hideOptions() {

	var options = document.getElementsByTagName('option');

	for (opt of options) {
		// pass over the party size

		if (opt.length == 1)
			;
		else if (opt.value >= t.closing ) {
			opt.setAttribute("diabled");
		}
		
	}

}

hideOptions();


