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
    thermostat.increaseByOne();
    expect(thermostat.displayTemp()).toEqual(21);
  })

  it("should decrease the temp on push down button", function(){
    thermostat.decreaseByOne();
    expect(thermostat.displayTemp()).toEqual(19);
  })

  it("should have a minimum of 10 degrees", function(){
    for(var i = 0; i < 11; i++) {
      thermostat.decreaseByOne();
    }
    expect(thermostat.displayTemp()).toEqual(10)
  });

  it("should have a maximum temp in power saving mode of 25 degrees", function() {
    for(var i = 0; i < 6 ; i++) {
      thermostat.increaseByOne();
    }
    expect(thermostat.displayTemp()).toEqual(25);
  })

  it("should have a maximum temp in non-power saving mode of 32 degrees", function() {
    thermostat.togglePowerSavingMode();
    for(var i = 0; i < 13 ; i++) {
      thermostat.increaseByOne();
    }
    expect(thermostat.displayTemp()).toEqual(32);
  })

  it("Should reset to 20 when reset is pushed", function(){
    thermostat.increaseByOne();
    thermostat.resetTemp();
    expect(thermostat.displayTemp()).toEqual(20);
  })

});
