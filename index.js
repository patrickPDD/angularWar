//Create deck of 52 cards

let cards = [];
let cacheOcards = [];
let currentBattle = [];
let players = [];

class Player {
  constructor(name) {
    (this.name = name), (this.hand = []);
  }
}

// function addPlayer(name) {
//   new Player(name);
// }

players.push(new Player("John"));
players.push(new Player("Bill"));
// console.log(players);
function card(value, name, suite) {
  this.value = value;
  this.name = name;
  this.suite = suite;
}

function deck() {
  this.suites = ["Spade", "Diamond", "Heart", "Club"];
  this.names = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  for (let i = 0; i < this.suites.length; i++) {
    for (let j = 0; j < this.names.length; j++) {
      // card = {value: j + 1, names:}
      cards.push({ value: j + 1, name: names[j], suite: suites[i] });
    }
  }
  return cards;
}

deck();
//shuffle deck
// Fisher -Yates(not my code)
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//end of Fisher-yates shuffle

shuffle(cards);
//deal cards

var i = 0;
while (i < cards.length) {
  if (i == 0 || i % 2) {
    players[0].hand.push(cards[i]);
  } else {
    players[1].hand.push(cards[i]);
  }
  i++;
}
console.log("player one cards: ", players[0].hand.pop());
console.log("player 2 cards", players[1].hand);

//play

//draw cards for each player
for (player in players) {
  // console.log(players[0].hand.pop());
  let cardplayed = players[player].hand.pop();
  currentBattle.push(cardplayed);
  $scope.player[player] = cardplayed;
}
console.log("current Battle", currentBattle);

//display cards for each player


// console.log("Players: ", players);
//Compare cards larger value gets both cards added to the bottom of their deck
// for (cards in currentBattle) {
//   console.log(cards);
//   console.log("first card value: ", currentBattle[cards][0]);

function findWinningCard(array, key) {
  for (let i = 0; i < array.length; i++) {
    let keyofwinner = 0;
    if (array[i][key] === value) {
      console.log("this happened: ", array[i]);
    }
  }
}

// console.log(findWinningCard(currentBattle, "value", 7));
// if (currentBattle[cards].value > currentBattle[cards + 1].value) {
//   console.log("what does this mean");
// }
// }

//if tie deal
