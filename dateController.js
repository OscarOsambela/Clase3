let moment = require("moment");

class Dates {
  constructor(birthday) {
    this.birthday = moment(birthday, "DD/MM/YYYY");
    this.today = moment();
  }
  getToday() {
    return this.today.format("L");
  }
  getDifferenceYear() {
    return this.today.diff(this.birthday, "years", true);
  }
  getDifferenceDays() {
    return this.today.diff(this.birthday, "days", true);
  }
}

module.exports = Dates;
