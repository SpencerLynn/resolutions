// http://repl.it/ZML

// PROBLEM

/*
The number 3797 has an interesting property. Being prime itself,
it is possible to continuously remove digits from left to right,
and remain prime at each stage: 3797, 797, 97, and 7. Similarly
we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both
truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

// ANSWER //
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};
Array.prototype.fill=function(v){var i=0,a=[];while(i++<this.length)a.push(v);return a};
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)},0)};

function truncatablePrimeSum(count, max) {
    var truncPrimes = [];
    var allNumbers = Array.range(0,max).fill(true);
    allNumbers[0] = false;
    allNumbers[1] = false;

    for (var i = 2; i < max; i++) {
        if (allNumbers[i]) {
            for (var j = i*2; j < max; j += i) {
                allNumbers[j] = false;
            }
            // In problem description, 2,3,5,7 are not truncatable primes
            if (i > 7) {
                // Check all truncations
                var allTruncPrime = true;
                var iStr = i.toString();
                for (var idx = 1; idx < iStr.length; idx++) {
                    if (!allNumbers[iStr.substr(idx)])
                        allTruncPrime = false;
                    if (!allNumbers[iStr.substr(0, iStr.length-idx)])
                        allTruncPrime = false;
                }
                if (allTruncPrime)
                    truncPrimes.push(i);
            }
        }

        if (truncPrimes.length === count)
            break;
    }

    return truncPrimes.sum();
}

truncatablePrimeSum(11, 1000000);

// 748317
