function addOption (value) {
	document.write("<option value="+value+">"+value+"</option>");
}

for (var i = 1; i < 13; i++) {
	addOption(i);
}
