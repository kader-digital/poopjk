class Time extends Date {

	constructor () {

		super()
		this.year = this.getUTCFullYear();
		this.month = this.getMonth();
		this.day = this.getDate();
		this.hour = this.getHours();
		this.min = this.getMinutes();
		this.weekDay = this.getDay();

		this.opening = 17;
		this.closing = this.setClosing();

		this.round();
		if (this.hour >= this.closing) 
			this.cycle();
		

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

	cycle () {

		var months = [31,28,31,30,31,30,31,31,30,31,30,31];

		if (this.month == 12 && (this.day == months[this.month-1])) {
			this.year++;
			this.month = 1;
			this.day = 1;
		}
		else if (this.day == months[this.month-1]) {
			this.day = 1;
			this.month++;
		}
		else {
			this.day++;
		}



	}

	setClosing () {
		
		if (this.weekDay > 5)
			return 23;
		else 
			return 22;

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
