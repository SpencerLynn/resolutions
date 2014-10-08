// http://jsfiddle.net/ekomkw13/1/

// PROBLEM //

/*
It is possible to show that the square root of
two can be expressed as an infinite continued fraction.

√ 2 = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...

By expanding this for the first four iterations, we get:

1 + 1/2 = 3/2 = 1.5
1 + 1/(2 + 1/2) = 7/5 = 1.4
1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...

The next three expansions are 99/70, 239/169, and 577/408,
but the eighth expansion, 1393/985, is the first example where
the number of digits in the numerator exceeds the number of
digits in the denominator.

In the first one-thousand expansions, how many fractions
contain a numerator with more digits than denominator?
*/

// ANSWER //
// 3/2, 7/5, 17/12, 41/29, 99/70, etc
// numerator(k+1) = numerator(k) + 2*denominator(k)
// denomicator(k+1) = numerator(k) + denominator(k)
function greaterNumeratorDigitsCount(expansions) {
    var count = 0;
    var numer = new BigNumber(3);
    var denom = new BigNumber(2);
    for (var i = 2; i <= expansions; i++) {
        var tempNumer = numer;
        numer = numer.plus(denom.times(2));
        denom = denom.plus(tempNumer);
        if (numer.toString(10).length > denom.toString(10).length)
            count++;
    }
    return count;
}

var result = greaterNumeratorDigitsCount(1000);
console.log(result);

// 153
