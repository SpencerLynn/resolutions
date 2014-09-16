// http://repl.it/ZGg

// PROBLEM //

/*
The fraction 49/98 is a curious fraction, as an inexperienced
mathematician in attempting to simplify it may incorrectly
believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction,
less than one in value, and containing two digits in the numerator and
denominator.

If the product of these four fractions is given in its lowest common terms,
find the value of the denominator.
*/

// ANSWER //

Array.prototype.last=function(){return this[this.length-1]};
Number.prototype.findFactors = function() {
    var factors = [];

    var highFactor = this/2;
    var currentFactor = 2;

    while (currentFactor <= highFactor) {
        if (this % currentFactor === 0) {
            factors.push(currentFactor);
            if (currentFactor !== highFactor)
                factors.push(highFactor);
        }

        currentFactor++;
        highFactor = this/currentFactor;
    }

    return factors;
};

function isCancellingFraction(numer, denom) {
    var numerStr = numer.toString();
    var n0 = Number(numerStr[0]);
    var n1 = Number(numerStr[1]);

    var denomStr = denom.toString();
    var d0 = Number(denomStr[0]);
    var d1 = Number(denomStr[1]);

    if (n0 === d0 && n0 !== 0 && d0 !== 0)
        return n1 < d1 && numer/denom == n1/d1;
    else if (n0 === d1 && n0 !== 0 && d1 !== 0)
        return n1 < d0 && numer/denom == n1/d0;
    else if (n1 === d0 && n1 !== 0 && d0 !== 0)
        return n0 < d1 && numer/denom == n0/d1;
    else if (n1 === d1 && n1 !== 0 && d1!== 0)
        return n0 < d0 && numer/denom == n0/d0;
    return false;
}

function cancellingFractionSumDenom() {
    var numerProduct = 1;
    var denomProduct = 1;

    for (var i = 10; i < 100; i++) {
        for (var j = i+1; j < 100; j++) {
            // First check for common chars
            if (isCancellingFraction(i,j)) {
                numerProduct *= i;
                denomProduct *= j;
            }
        }
    }

    var allFactors = numerProduct.findFactors().reduce(function(m,f,i) {
        if (m.indexOf(f) === -1)
            m.push(f);
        return m;
    }, denomProduct.findFactors()).sort().reverse();

    for (i = 0; i < allFactors.length; i++) {
        if (numerProduct % allFactors[i] === 0 &&
            denomProduct % allFactors[i] === 0) {
            numerProduct /= allFactors[i];
            denomProduct /= allFactors[i];
        }
    }

    return denomProduct;
}

cancellingFractionSumDenom();

// 100
