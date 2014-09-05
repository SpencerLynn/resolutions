// http://repl.it/YVF

// PROBLEM //

/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation
of the digits 1, 2, 3 and 4.

If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

// ANSWER //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};
Number.prototype.factorial=function(){var p=1,n=2;while(n<=this)p*=n++;return p};

function findLexicographicPermutation(digits, index) {
    var digits = digits.sort();

    var factorialIndex = digits.length - 1;
    var permutation = "";

    while (index > 0 && digits.length > 0) {
        var combinationsPerNextDigit = (digits.length - 1).factorial();
        var digitIndex = Math.floor(index / combinationsPerNextDigit);

        if (digitIndex > digits.length) {
            throw index + " element of the permutation does not exist";
        } else if (index % combinationsPerNextDigit === 0) {
            // If we hit it exactly, we should back up one
            digitIndex--;
        }

        var nextDigit = digits[digitIndex];
        permutation += nextDigit;

        digits.splice(digitIndex, 1);
        index -= (digitIndex * combinationsPerNextDigit);
    }

    return permutation;
}

findLexicographicPermutation(Array.range(0,10), 1000000);

// 2783915460
