function Thermostat() {
  this.temp = 20;
  this.colour = 'yellow';

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
    this.displayColour()
  }

  Thermostat.prototype.decreaseByOne = function() {
    if (this.temp == this.MINIMUM_TEMP) {
      return;
    } else {
      this.temp--;
    }
    this.displayColour()
  }

  Thermostat.prototype.resetTemp = function() {
    this.temp = 20;
  }

  Thermostat.prototype.displayColour = function() {
    if (this.temp < 18) {
      this.colour = 'green';
    } else if (this.temp < 25) {
      this.colour = 'yellow';
    } else {
      this.colour = 'red';
    }
    return this.colour;
  }

module.exports = Thermostat;
