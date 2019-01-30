class Deck {
  constructor() {
    this.deck = [];

    const suites = ["Spade", "Diamond", "Heart", "Club"];
    const values = [
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

    for (let suite in suites) {
      for (let value in values) {
        // let v = values[value];
        this.deck.push(`${values[value]} : ${suites[suite]} `);
      }
    }
  }

  shuffle() {
    var i = 0;
    var player1 = [];
    var player2 = [];
    while (i !== this.deck.length) {
      player1.push(this.deck[i]);
      player2.push(this.deck[i + 1]);
      i += 2;
    }
    return player1, player2;
  }

  //   deal() {
  //     const { deck } = this;
  //     let m = deck.length;
  //     while (m) {
  //       let card = deck.pop();
  //       if (m === 0 || m % 2 === 0) {
  //         player1.push(card);
  //       } else if (m == 1 || m % 2 > 0) player2.push(card);
  //     }
  //   }
}
const deck1 = new Deck();
deck1.shuffle();
// deck1.deal();

// console.log(deck1);
console.log(player1);
