// Print out all the leap years in the last 100 years

function findLeapYear() {
  var startYr = 1900;
  var endYr = 2019;

  // year = variable name rather than i to give reader an indication of what the variable is
  for (var year = startYr; year <= endYr; year++) {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    ) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  }
}
findLeapYear();

// For numbers between 1 and 200:
// a) print out multiples of 7
// b) print out every second odd number

var countOddNumber = 0;

for (var numbers = 1; numbers <= 200; numbers++) {
  if (numbers % 7 === 0) {
    console.log("This is multiple of seven " + numbers);
  }
  if (numbers % 2 !== 0) {
    countOddNumber++;
    if (countOddNumber % 2 === 0) {
      console.log("This is the second odd number " + numbers);
    }
  }
}
