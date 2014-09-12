// http://repl.it/Ysi

// PROBLEM //

/*
Euler discovered the remarkable quadratic formula:

n² + n + 41

It turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.

The incredible formula  n² − 79n + 1601 was discovered, which produces 80 primes for the consecutive values n = 0 to 79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n² + an + b, where |a| < 1000 and |b| < 1000

where |n| is the modulus/absolute value of n
e.g. |11| = 11 and |−4| = 4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.
*/

// ANSWER //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a}
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};

function negate(x) {
    return -x;
}

function getPrimesBelow(max) {
    var allNumbers = Array.fill(max, true);
    allNumbers[0] = false;
    allNumbers[1] = false;

    for (var i = 2; i < Math.sqrt(max); i++) {
        if (allNumbers[i]) {
            for (var j = i*2; j< max; j += i) {
                allNumbers[j] = false;
            }
        }
    }

    return allNumbers.reduce(function(a, p, i) {
        if (p) a.push(i);
        return a;
    }, []);
}

function coefficientProduct(max) {
    // n² + an + b if a,b,n are all 1000
    var maxValue = max * max + max * max + max;
    var primeMap = getPrimesBelow(maxValue).reduce(function(m,p) { m[p] = true; return m}, {});
    var aValues = Array.range(-(max - 1), max);
    var bValues = getPrimesBelow(max - 1);
    bValues = bValues.map(negate).reverse().concat(bValues);

    var longestStreak = 0;
    var longestA = -1;
    var longestB = -1;

    for (var aIndex = 0; aIndex < aValues.length; aIndex++) {
        for (var bIndex = 0; bIndex < bValues.length; bIndex++) {
            var a = aValues[aIndex];
            var b = bValues[bIndex];

            var n = 0;
            var value = (n * n) + (n * a) + b;
            while (primeMap[value]) {
                n++;
                value = (n * n) + (n * a) + b;
            }

            if (n > longestStreak) {
                longestStreak = n;
                longestA = a;
                longestB = b;
            }
        }
    }

    return longestA * longestB;
}

console.log(coefficientProduct(1000));

// -59231

// NOTE: Credit to @JoeyRobichaud for nearly all of the work on this problem. :)
