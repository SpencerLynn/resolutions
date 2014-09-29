// http://repl.it/0KH

// PROBLEM //

/*
The prime 41, can be written as the sum of six consecutive
primes:

41 = 2 + 3 + 5 + 7 + 11 + 13

This is the longest sum of consecutive primes that adds
to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand
that adds to a prime, contains 21 terms, and is equal to
953.

Which prime, below one-million, can be written as the sum
of the most consecutive primes?
*/

// ANSWER //
Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)},0)};

function getPrimesBelow(max) {
    var allNumbers = Array.fill(max, true);
    allNumbers[0] = false;
    allNumbers[1] = false;

    for (var i = 2; i < Math.sqrt(max); i++) {
        if (allNumbers[i]) {
            for (var j = i*2; j < max; j += i) {
                allNumbers[j] = false;
            }
        }
    }

    return allNumbers.reduce(function(a, p, i) {
        if (p) a.push(i);
        return a;
    }, []);
}

function isPrime(n, primes) {
    for (var i = 0; i < primes.length; i++) {
        if (primes[i] > n)
            return false;
        if (primes[i] === n)
            return true;
    }
    return false;
}

function largestConsecutivePrimeSum(max) {
    var longestChain = 0;
    var longestChainSum = 0;
    var primes = getPrimesBelow(max);

    for (var i = 0; i < primes.length; i++) {
        var sum = primes.slice(i, i+longestChain).sum();
        var sumChainLength = longestChain;
        for (var j = i+longestChain; j < primes.length; j++) {
            sum += primes[j];
            sumChainLength++;
            if (sum > max)
                break;
            else if (!isPrime(sum, primes))
                continue;
            else if (sumChainLength > longestChain) {
                longestChain = sumChainLength;
                longestChainSum = sum;
            }
        }
    }

    return longestChainSum;
}

largestConsecutivePrimeSum(1000000);

// 997651
