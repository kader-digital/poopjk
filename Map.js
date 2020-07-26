const fs = require("fs");
class Map {

	constructor () {
	
		this.map = new Array();
		this.raw = this.load();

	}

	load () {

		var data = fs.readFileSync('tables.txt', 'utf8');
		var list = data.split('\n');

		for (var i = 0; i < list.length; i++) {
			list[i] = list[i].split(' ');
		}
		return list;
	}

}

class Table {

	constructor (no,size) {

		this.tableNo = no;
		this.tableSize = size;

	}

	getTableNo () {
		return this.tableNo;
	}
	getTableSize () {
		return this.tableSize;
	}

	setTableNo (no) {
		this.tableNo = no;
	}
	setTableSize (size) {
		this.tableSize = size;
	}

}

var boardState = new Map ();

