const fs = require("fs");

class Map {

	constructor () {
	
		this.map = new Array();
		this.data = this.load();
		this.data = this.format();	
		console.log(this.map);

	}

	load () {

		var data = fs.readFileSync('tables.txt', 'utf8');
		var list = data.split('\n');

		for (var i = 0; i < list.length; i++) {
			list[i] = list[i].split(' ');
		}
		return list;
	}

	format () {
		
		var t;
		for (var i = 0; i < this.data.length-1; i++) {
			t = new Table (this.data[i][0],this.data[i][1]);
			this.map[i] = t;		
		}		

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

