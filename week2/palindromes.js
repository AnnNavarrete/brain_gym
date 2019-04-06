/* 1st of April 2019
# Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.
[Some Palindromes to test against](http://www.palindromelist.net/)
Good Luck!*/

/*pseudocode
1. convert all characters into lowercase and remove all special characters
2. split the characters into an array
3. reverse the array of words
4. join the words and if the words is the same prior to the reverse return true, else false*/

var isPalindrome = function() {
  var convertedCharacters = palindrome.toLowerCase();
  var cleanPalindrome = convertedCharacters./[^A-Za-z0–9]/g;

}

  //var replace = /[^A-Za-z0–9]/g; // remove all unwanted characters
  var splitWords = palindrome.split();
  var reversed = splitWords.reverse();
  var joinWords = reversed.join();
  {
    if (palindrome === joinWords) {
      return true;
    } else {
      return false;
    }
  }

  //return joinWords;
}

console.log(isPalindrome("level"));

var checkForPalindromes = function(word) {
  var inputToLowerCase = word.toLowerCase();
  var reverse;
};
