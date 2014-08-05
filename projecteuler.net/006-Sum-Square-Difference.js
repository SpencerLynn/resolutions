// http://jsfiddle.net/5p6ed/

// PROBLEM //

/*
The sum of the squares of the first ten natural numbers is:
12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is:
(1 + 2 + ... + 10)2 = 552 = 3025\

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

// ANSWER //

Number.square = function(x){return x*x};
Number.prototype.square = function(){return this*this};

var sumOfSquares = function(numbers) {
    return numbers.map(Number.square).sum();
};

var squareOfSum = function(numbers) {
    return numbers.sum().square();
};

var difference = function() {
    var numbers = Array.range(1,101);
    return squareOfSum(numbers) - sumOfSquares(numbers);
};

var result = difference();

// 25164150