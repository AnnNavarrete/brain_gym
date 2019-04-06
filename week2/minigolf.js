// 2nd of April
/*# Mini Golf
Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards 
none of the scores are ever totalled. Write a function called `totalScores` in JS 
that calculates their scores and `console.log` the total for each player and their 
combined total.

#### Bob =
Hole 1 = 3
Hole 2 = 2
Hole 3 = 6
Hole 4 = 11
Hole 5 = 9
Hole 6 = 2
Hole 7 = 6
Hole 8 = 9
Hole 9 = 10


#### Jimbo
Hole 1 = 5
Hole 2 = 12
Hole 3 = 9
Hole 4 = 22
Hole 5 = 13
Hole 6 = 7
Hole 7 = 16
Hole 8 = 10
Hole 9 = 11

#### Fish
Hole 1 = 2
Hole 2 = 2
Hole 3 = 4
Hole 4 = 5
Hole 5 = 4
Hole 6 = 3
Hole 7 = 6
Hole 8 = 4
Hole 9 = 1

## Extension
Now work out each golfers round compared to the course par.

#### Par
Hole 1 = 3
Hole 2 = 4
Hole 3 = 5
Hole 4 = 5
Hole 5 = 3
Hole 6 = 3
Hole 7 = 4
Hole 8 = 3
Hole 9 = 5

#### Ninja Extension
Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.*/

// pseudocode
// write a function that adds the total for each player
// add another variable that adds the total for all players

// function totalScores() {
//   var bobScores = [3, 2];
//   var sum = 0;

//   // var jimboScores = 5 + 12;
//   //var fishScores = 2 + 2;
//   console.log("Bob's total score " + bobScores);
//   //   console.log("Jimbo's total score " + jimboScores);
//   //   console.log("Fish total score " + fishScores);
// }
// totalScores();

// creating an object with various properti

// when requiring to label multiple items i.e. multiple variable, think about using object

var players = [
  {
    name: "Bob",
    holeScores: [3, 2, 6, 1, 9, 2, 6, 9, 10]
  },
  {
    name: "Jimbo",
    holeScores: [5, 12, 9, 22, 13, 7, 16, 10, 11]
  },
  {
    name: "Fish",
    holeScores: [2, 2, 4, 5, 4, 3, 6, 4, 1]
  }
];

var players = function(scores) {
  for (i = 0; i < players.length; i++) {
    var storing = 0;
    for (j = 0; j < scores.length; i++) {
      console.log(storing);
    }
  }
};
players();
// check an array function called for each
