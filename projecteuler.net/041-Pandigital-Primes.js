// http://repl.it/Znh

// PROBLEM //

/*
We shall say that an n-digit number is pandigital if it
makes use of all the digits 1 to n exactly once. For example,
2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?
*/

// ANSWER //
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};
Array.prototype.fill=function(v){var i=0,a=[];while(i++<this.length)a.push(v);return a};
Array.prototype.last=function(){return this[this.length-1]};

function isPandigital(num) {
    var sortedNums = num.toString().split('').sort();
    var last = Number(sortedNums.last());
    var expectedNums = Array.range(1, last + 1).map(String);

    return sortedNums.join('') == expectedNums.join('');
}

// If a number is divisible by 3, the sum of the factors
//  cannot be divisible by 3
// Pandigital Number combinations:
// 1 + 2 = 3
// 1 + 2 + 3 = 6
// 1 + 2 + 3 + 4 = 10
// 1 + 2 + 3 + 4 + 5 = 15
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45
// Only the 4 digit and 7 digit numbers were not divisble by 3.
//  That means that the only prime pandigital numbers are either
//  4 or 7 digits
function largestPandigitalPrime() {
    var max = 7654321;
    var allNumbers = Array.range(0,max).fill(true);
    var largestPanPrime = 0;

    for (var i = 2; i < max; i++) {
        if (allNumbers[i]) {
            for (var j = i*2; j < max; j += i) {
                allNumbers[j] = false;
            }

            if (isPandigital(i) && i > largestPanPrime)
                largestPanPrime = i;
        }
    }

    return largestPanPrime;
}

largestPandigitalPrime();

// 7652413
