class Time {

	constructor () {

		var d = new Date();

		this.year = d.getUTCFullYear();
		this.month = d.getMonth();
		this.day = d.getDate();
		this.hour = d.getHours();
		this.min = d.getMinutes();
		this.weekDay = d.getDay();

		this.opening = 5;
		this.closing = this.setClosing();

		this.round();

	}

	round () {

		if (this.min >= 45) {
			this.min = 0;
			if (this.hour < 24)
				this.hour++;
		}
		else if (this.min >= 30)
			this.min = 45;
		else if (this.min >= 15)
			this.min = 30;
		else
			this.min = 15;

	}

	setClosing () {
		
		if (this.weekDay > 5)
			return 11;
		else 
			return 10;

	}

	getMin () {
		return this.min;
	}
	getHour () {
		return this.hour;
	}
	getDay () {
		return this.day;
	}
	getMonth () {
		return this.month;
	}
	getYear () {
		return this.year;
	}
	getWeekDay () {
		return this.weekDay;
	}

}

var t = new Time();
console.log(t);
