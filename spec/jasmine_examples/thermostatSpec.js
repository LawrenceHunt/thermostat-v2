
describe("Thermostat", function() {
  var Thermostat = require('../../lib/thermostat/Thermostat');
  var thermostat;


  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should be set to 20💩", function() {
    expect(thermostat.displayTemp()).toEqual(20);
  });

});
