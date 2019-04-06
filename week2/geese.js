// 5th of April 2019

/*Filter Out the Geese
Write a function, gooseFilter, that takes an array of strings as an argument and 
returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order as in the initial array 
passed to your function, albeit with the 'geese' removed. Note that all of the strings 
will be in the same case as those provided, and some elements may be repeated.*/

var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

var removedGeese = function(nameOfOneGeese) {
  // if nameOfOneGeese does not exist in geese, return true, else false
  if (geese.indexOf(nameOfOneGeese) === -1) {
    return true;
  } else {
    return false;
  }
};

var gooseFilter = function(filterOutTheGeese) {
  return filterOutTheGeese.filter(removedGeese);
};

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish"
  ])
);

/*BONUS:
Write a function, gooseShort, that takes an array of strings as an argument, and returns an array 
containing only the first character of each of the words in their name. 

For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

Your function would return the following array:
["M", "H B", "C", "B"]*/

//pseudocode
// need to loop through each item in the array within the arguements
// for each name found in the array, return only the first letter

var gooseShort = function(names) {
  var copyOfnames = [];
  for (i = 0; i < names.length; i++) {
    copyOfnames.push(names[i]);
  }
  return copyOfnames;
};

console.log(gooseShort(["Mallard", "Hook Bill", "Crested", "Blue Swedish"]));
