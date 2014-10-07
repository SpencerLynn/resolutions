// http://jsfiddle.net/7qea1wjz/

// PROBLEM //

/*
In the card game poker, a hand consists of five cards and are ranked,
from lowest to highest, in the following way:

High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
The cards are valued in the order:
2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest
value wins; for example, a pair of eights beats a pair of fives (see example 1 below).
But if two ranks tie, for example, both players have a pair of queens, then highest
cards in each hand are compared (see example 4 below); if the highest cards tie then
the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:

Hand    Player 1            Player 2            Winner
1	 	5H 5C 6S 7S KD      2C 3S 8S 8D TD      Player 2
        Pair of Fives       Pair of Eights

2	 	5D 8C 9S JS AC      2C 5C 7D 8S QH      Player 1
        Highest card Ace    Highest card Queen

3	 	2D 9C AS AH AC      3D 6D 7D TD QD      Player 2
        Three Aces          Flush with Diamonds

4	 	4D 6S 9H QH QC      3D 6D 7H QD QS      Player 1
        Pair of Queens      Pair of Queens
        Highest card Nine   Highest card Seven

5	 	2H 2D 4C 4D 4S      3C 3D 3S 9S 9D      Player 1
        Full House          Full House
        With Three Fours    with Three Threes

The file, poker.txt, contains one-thousand random hands dealt to two players.
Each line of the file contains ten cards (separated by a single space):
the first five are Player 1's cards and the last five are Player 2's cards.
You can assume that all hands are valid (no invalid characters or repeated cards),
each player's hand is in no specific order, and in each hand there is a clear winner.

How many hands does Player 1 win?
*/

// ANSWER //
Array.prototype.chunk=function(n){var a=[],i=0;while(i<this.length){a.push(this.slice(i,i+n));i+=n}return a};
Array.prototype.group=function(f){return this.reduce(function(g,i){var k=f(i);g[k]=g[k]||[];g[k].push(i);return g},{})};
Array.prototype.find=function(f){for(var i=0;i<this.length;i++)if(f(this[i]))return this[i]};
Array.prototype.all=function(f){for(var i=0;i<this.length;)if(!f(this[i++]))return !1;return !0};
Array.prototype.last=function(){return this[this.length-1]};
Array.prototype.pluck=function(n){return this.map(function(i){return i[n]})};

var Card = function(card) {
    var self = this;

    self.suit = card[1];

    if (card[0] == "T")
        self.value = 10;
    else if (card[0] == "J")
        self.value = 11;
    else if (card[0] == "Q")
        self.value = 12;
    else if (card[0] == "K")
        self.value = 13;
    else if (card[0] == "A")
        self.value = 14;
    else
        self.value = Number(card[0]);
}

var Hand = function(cards) {
    var self = this;

    self.cards = cards.map(function (c) { return new Card(c); });
    self.cards.sort(function(a,b) { return a.value - b.value; });
    self.tieBreak = "";

    self.isStraight = function() {
        var value = self.cards.pluck('value')[0];
        for (var i = 1; i < self.cards.length; i++) {
            value++;
            if (self.cards[i].value !== value)
                return false;
        }
        return true;
    }

    self.handValue = function() {
        var isFlush = self.cards.all(function(c) { return c.suit == self.cards[0].suit; });
        var isStraight = self.isStraight();

        if (isFlush && isStraight) {
            if (self.cards.last() == 14)
                return 10; // Royal Flush

            self.tieBreak = self.cards.last().value;
            return 9; // Straight Flush
        }

        var cardGroups = self.cards.group(function(c) { return c.value; });
        var groups = Object.keys(cardGroups).map(function(key) { return cardGroups[key]; });

        if (groups.length == 2) {
            var fourOfAKind = groups.find(function(g) { return g.length == 4; });
            if (fourOfAKind) {
                self.tieBreak = fourOfAKind.last().value;
                return 8; // Four of a Kind
            }

            var threeOfAKind = groups.find(function(g) { return g.length == 3; });
            var pair = groups.find(function(g) { return g.length == 2; });
            self.tieBreak = (threeOfAKind.last().value << 4) + pair.last().value;
            return 7; // Full House
        }

        if (isFlush) {
            self.tieBreak = self.cards.last().value;
            return 6; // Flush
        }

        if (isStraight) {
            self.tieBreak = self.cards.last().value;
            return 5; // Straight
        }

        if (groups.length == 3) {
            var threeOfAKind = groups.find(function(g) { return g.length == 3; });
            if (threeOfAKind) {
                self.tieBreak = threeOfAKind.last().value;
                return 4; // Three of a Kind
            }

            var pairs = groups.filter(function(g) { return g.length == 2; });
            self.tieBreak = (pairs[0].last().value << 4) + pairs[1].last().value;
            return 3; // Two Pair
        }

        if (groups.length == 4) {
            var pair = groups.find(function(g){return g.length == 2});
            self.tieBreak = pair.last().value;
            return 2; // Pair
        }

        self.tieBreak = self.cards.last().value;
        return 1; // High Card
    };
};

function determineWinner(hand) {
    var plyrs = hand.chunk(5).map(function(h) { return new Hand(h); });
    var plyr1Hand = plyrs[0].handValue();
    var plyr2Hand = plyrs[1].handValue();

    if (plyr1Hand > plyr2Hand)
        return 1;
    else if (plyr2Hand > plyr1Hand)
        return 2;

    var plyr1TieBreak = plyrs[0].tieBreak;
    var plyr2TieBreak = plyrs[1].tieBreak;

    if (plyr1TieBreak > plyr2TieBreak)
        return 1;
    else if (plyr2TieBreak > plyr1TieBreak)
        return 2;
}

function countWinners(hands, player) {
    var count = 0;
    for (var i = 0; i < hands.length; i++) {
        if (determineWinner(hands[i]) == player) {
            console.log(i);
            count++;
        }
    }
    return count;
}

var result = countWinners(hands, 1);
console.log(result);

// 376
