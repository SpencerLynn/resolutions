// http://repl.it/0xI

// PROBLEM //

/*
Starting with 1 and spiralling anticlockwise in the
following way, a square spiral with side length 7 is formed.

37 36 35 34 33 32 31
38 17 16 15 14 13 30
39 18  5  4  3 12 29
40 19  6  1  2 11 28
41 20  7  8  9 10 27
42 21 22 23 24 25 26
43 44 45 46 47 48 49

It is interesting to note that the odd squares lie
along the bottom right diagonal, but what is more interesting
is that 8 out of the 13 numbers lying along both diagonals
are prime; that is, a ratio of 8/13 ≈ 62%.

If one complete new layer is wrapped around the spiral
above, a square spiral with side length 9 will be formed.
If this process is continued, what is the side length of
the square spiral for which the ratio of primes along both
diagonals first falls below 10%?
*/

// ANSWER //
function isPrime(n) {
    if (n <= 1)
        return false;
    else if (n === 2)
        return true;
    else if (n % 2 === 0)
        return false;
    else if (n % 3 === 0)
        return false;

    var sqrtN = Math.sqrt(n);
    for (var i = 5; i < sqrtN; i += 6) {
        if (n % i === 0)
            return false;
        else if (n % (i + 2) === 0)
            return false;
    }

    return true;
}

function findSideLengthWithPrimeRatioBelow(belowPercent) {
    var sideLength = 3;
    var numberCount = 5;
    var primeCount = 3;
    var primeRatio = primeCount / numberCount;

    while (primeRatio > belowPercent) {
        sideLength += 2;
        numberCount += 4;

        var squareCorner = Math.pow(sideLength, 2);
        if (isPrime(squareCorner - (sideLength - 1))) primeCount++;
        if (isPrime(squareCorner - 2 * (sideLength - 1))) primeCount++;
        if (isPrime(squareCorner - 3 * (sideLength - 1))) primeCount++;

        primeRatio = primeCount / numberCount;
    }

    return sideLength;
}

findSideLengthWithPrimeRatioBelow(0.10);

// 26241
