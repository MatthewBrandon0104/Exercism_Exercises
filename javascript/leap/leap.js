var Year = function (date) {
    this.value = date;
};

Year.prototype.isLeap = function (year) {
    if (this.value % 400 === 0) {
        return true;
    } else if (this.value % 100 === 0) {
        return false;
    } else if (this.value % 4 === 0) {
        return true;
    } else {return false;}
};

module.exports = Year;
