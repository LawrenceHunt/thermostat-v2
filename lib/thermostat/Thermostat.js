function Thermostat() {
  this.temp = 20;
  this.MINIMUM_TEMP = 10;
  this.powerSavingMode = true;
  if (this.powerSavingMode) {
    this.MAXIMUM_TEMP = 25;
  }
  else {
    this.MAXIMUM_TEMP = 32;
  }
}

  Thermostat.prototype.togglePowerSavingMode = function() {
    if (this.powerSavingMode) {
      this.powerSavingMode = false;
      this.MAXIMUM_TEMP = 32;
    } else {
      this.powerSavingMode = true;
      this.MAXIMUM_TEMP = 25;
    }
  }

  Thermostat.prototype.displayTemp = function() {
    return this.temp;
  }

  Thermostat.prototype.increaseByOne = function() {
    if (this.temp == this.MAXIMUM_TEMP) {
      return;
    } else {
      this.temp++;
    }
  }

  Thermostat.prototype.decreaseByOne = function() {
    if (this.temp == this.MINIMUM_TEMP) {
      return;
    } else {
      this.temp--;
    }
  }

module.exports = Thermostat;
