describe("Thermostat", function() {
  var Thermostat = require('../../lib/thermostat/Thermostat');
  var thermostat;


  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should be set to 20💩", function() {
    expect(thermostat.displayTemp()).toEqual(20);
  });

  it("should increase the temp on push up button", function() {
    var temp1 = thermostat.displayTemp();
    thermostat.increaseByOne();
    var temp2 = thermostat.displayTemp();
    expect(temp2).toEqual(temp1 + 1);
  })

  it("should decrease the temp on push down button", function(){
    var temp1 = thermostat.displayTemp();
    thermostat.decreaseByOne();
    var temp2 = thermostat.displayTemp();
    expect(temp2).toEqual(temp1 - 1);
  })
});
