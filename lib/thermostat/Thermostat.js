function Thermostat() {
  this.temp = 20;
  this.MINIMUM_TEMP = 10;
}

  Thermostat.prototype.displayTemp = function() {
    return this.temp;
  }

  Thermostat.prototype.increaseByOne = function() {
    this.temp++;
  }

  Thermostat.prototype.decreaseByOne = function() {
    if (this.temp == this.MINIMUM_TEMP) {
      return;
    } else {
      this.temp--;
    }
  }

module.exports = Thermostat;
