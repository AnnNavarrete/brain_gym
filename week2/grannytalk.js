/* 2nd of April 2019

Write a function 'grannyTalk' that takes a question as an argument and returns a string as her response.
If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"

If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"
The year will be a random year between 1930 and 1950.

If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."

bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and interpret 
her responses incorrectly by swapping vowels randomly in the words of her responses.
sample output of grandpaTalk:
// NO, NOT SINCE incorrect year // whats that sunny*/

/* Reminder: Read through the entire question, then ask myself, what is the most specific thing that is
ask for in the question. That is probably your starting point is handling that specific case as I'll be more
familiar with how to handle the logic and syntax*/

var grannyTalk = function(question) {
  if (question === "BYE") {
    return "What's that honey, I didn't hear you..";
  } else if (question === question.toUpperCase()) {
    var randomYear = Math.floor(Math.random() * 20) + 1930; // place things are used together, together
    return `NO, NOT SINCE ${randomYear}`;
  } else {
    return "SPEAK UP SONNY JIM";
  }
};
console.log(grannyTalk("I like eggs"));
