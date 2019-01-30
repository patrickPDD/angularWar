"use strict";
const myApp = angular
  .module("myApp", [])
  .factory("CreateDeck", function() {
    const cards = [];
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
    return function() {
      for (let i = 0; i < suites.length; i++) {
        for (let j = 0; j < names.length; j++) {
          // card = {value: j + 1, names:}
          cards.push({ value: j + 1, name: names[j], suite: suites[i] });
        }
      }
    };
  })
  .controller("MyController", [
    function($scope) {
      //Create deck of 52 cards
      //   CreateDeck();

      let cacheOcards = [];
      let currentBattle = [];
      let players = [];

      class Player {
        constructor(name) {
          (this.name = name), (this.hand = []);
        }
      }

      //   $scope.addPlayer = function(name) {
      //     new Player(name);
      //   };

      players.push(new Player("John"));
      players.push(new Player("Bill"));

      $scope.players = players;

      // console.log(players);
      function card(value, name, suite) {
        this.value = value;
        this.name = name;
        this.suite = suite;
      }

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
        if (i == 0 || i % 2) {
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
        for (let player in players) {
          // console.log(players[0].hand.pop());
          let cardplayed = players[player].hand.pop();
          currentBattle.push(cardplayed);
        }

        console.log("current Battle", currentBattle);

        $scope.currentBattle = currentBattle;

        //display cards for each player

        // console.log("Players: ", players);
        //Compare cards larger value gets both cards added to the bottom of their deck
        // for (cards in currentBattle) {
        //   console.log(cards);
        //   console.log("first card value: ", currentBattle[cards][0]);
        var keyofwinner = 0;
        for (let i = 0; i < currentBattle.length; i++) {
          if (currentBattle[1].value > currentBattle[0].value) {
            return (keyofwinner += 1);
          }
        }

        // [""0""].value
        //[1].value
        currentBattle = [];
        // console.log("winner: ", players[keyofwinner][name]);
        $scope.winningHand = players[keyofwinner].name;
      };

      // console.log(findWinningCard(currentBattle, "value", 7));
      // if (currentBattle[cards].value > currentBattle[cards + 1].value) {
      //   console.log("what does this mean");
      // }
      // }

      //if tie deal
    }
  ]);

angular.element(function() {
  angular.bootstrap(document, ["myApp"]);
  console.log("this is happening bootstrap");
});
