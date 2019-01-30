"use strict";
angular.module("myApp", []).controller("MyController", [
  "$scope",
  function($scope) {
    //Create deck of 52 cards

    let cards = [];
    let cacheOcards = [];
    let currentBattle = [];
    let players = [];

    $scope.ShowBattle = false;

    class Player {
      constructor(name) {
        (this.name = name), (this.hand = []);
      }
    }

    $scope.addPlayer = function(name) {
      new Player(name);
    };

    players.push(new Player("John"));
    players.push(new Player("Bill"));

    $scope.players = players;

    // console.log(players);
    function card(value, name, suite) {
      this.value = value;
      this.name = name;
      this.suite = suite;
    }

    (function deck() {
      const suites = ["Spade", "Diamond", "Heart", "Club"];
      const names = [
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
      for (let i = 0; i < suites.length; i++) {
        for (let j = 0; j < names.length; j++) {
          // card = {value: j + 1, names:}
          cards.push({ value: j + 1, name: names[j], suite: suites[i] });
        }
      }
      return cards;
    })();

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
    //TODO needs to be reworked for more than two players
    var i = 0;
    while (i < cards.length) {
      if (i % 2) {
        players[0].hand.push(cards[i]);
      } else {
        players[1].hand.push(cards[i]);
      }
      i++;
    }
    // $scope.player1 = players[0].hand.pop();
    // console.log("player 2 cards", players[1].hand);
    // $scope.player2 = players[1].hand.pop();
    //play

    //draw cards for each player
    $scope.draw = function() {
      currentBattle = [];
      for (let player in players) {
        // console.log(players[0].hand.pop());
        let cardplayed = players[player].hand.pop();
        currentBattle.push(cardplayed);
        $scope.ShowBattle = true;
      }

      //   console.log("current Battle", currentBattle);

      $scope.currentBattle = currentBattle;

      //display cards for each player

      // console.log("winner: ", players[keyofwinner][name]);

      if (currentBattle[0].value === currentBattle[1].value) {
        $scope.winningHand = "tie";
        cacheOcards.push(...currentBattle);
        console.log("cache o cards: ", cacheOcards);
      } else if (currentBattle[0].value > currentBattle[1].value) {
        $scope.winningHand = players[0].name;
        players[0].hand.push(...currentBattle);
        if (cacheOcards.length > 0) {
          players[0].hand.push(...cacheOcards);
          cacheOcards = [];
        }
        console.log("players hand: ", players[0].hand);
      } else {
        $scope.winningHand = players[1].name;
        players[1].hand.push(...currentBattle);
        if (cacheOcards.length > 0) {
          players[1].hand.push(...cacheOcards);
          cacheOcards = [];
        }
      }
    };
  }
]);

angular.element(function() {
  angular.bootstrap(document, ["myApp"]);
  console.log("this is happening bootstrap");
});
