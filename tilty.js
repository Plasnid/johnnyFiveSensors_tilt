//A0 and ground for pins
//https://abra-electronics.com/sensors/tilt-sensors/sens-53-tilt-sensor-switch-sw-520d.html
//range of 0-4 comes from  setting the scale from 0 to 10
//pins have no polarity

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor("A0");
  
  // Scale the sensor's data from 0-1023 to 0-10 and log changes
  sensor.on("change", function() {
    console.log(this.scaleTo(0, 4));
  });
});