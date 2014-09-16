// http://repl.it/ZFj

// PROBLEM //

/*
We shall say that an n-digit number is pandigital if it makes use of all
the digits 1 to n exactly once; for example, the 5-digit number, 15234,
is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing
multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity
can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only
include it once in your sum.
*/

// ANSWER //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};
Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)},0)};

function pandigitalProductSums(numDigits) {
    var chars = Array.range(1, numDigits + 1).map(String);
    var digits = chars.join('');
    var pandigitalProducts = {};

    var maxNum = Number(Array.fill(Math.floor(chars.length / 2), 9).join(''));
    for (var i = 0; i < maxNum; i++) {
        for (var j = 0; j < maxNum - i; j++) {
            var result = i * j;
            var panString = String(result) + String(i) + String(j);

            if (panString.length !== digits.length)
                continue;

            if (panString.split('').sort().join('') == digits)
                pandigitalProducts[result] = true;
        }
    }

    return Object.keys(pandigitalProducts).map(Number).sum();
}

pandigitalProductSums(9);

// 45228
