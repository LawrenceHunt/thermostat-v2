function Thermostat() {
  this.temp = 20;

  Thermostat.prototype.displayTemp = function() {
    return this.temp;
  }
}

module.exports = Thermostat;
