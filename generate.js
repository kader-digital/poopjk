function addOption (value) {
	document.write("<option id="+value+"+value="+value+">"+value+"</option>");
}

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

