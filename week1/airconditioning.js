/*
Air Conditioning
Write a function that takes three arguments

the current temperature.
if the A/C is functional.
and a desired temperature.
If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."*/

var airconditioner = function(currentTemp, acFunctional, desiredTemp) {
  if (acFunctional && currentTemp > desiredTemp) {
    console.log("Turn on the A/C Please");
  } else if (!acFunctional && currentTemp > desiredTemp) {
    console.log("Fix the A/C now! Its hot!");
  } else if (!acFunctional && currentTemp < desiredTemp) {
    console.log("Fix the A/C whenever you have the chance... Its cool");
  } else {
    console.log("Aircon working order");
  }
};
airconditioner(20, true, 23);
