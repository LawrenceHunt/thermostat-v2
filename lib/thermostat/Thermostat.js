function Thermostat() {
  this.temp = 20;
}

  Thermostat.prototype.displayTemp = function() {
    return this.temp;
  }

  Thermostat.prototype.increaseByOne = function() {
    this.temp++;
  }

module.exports = Thermostat;
