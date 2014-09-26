// http://repl.it/Zzs

// PROBLEM //

/*
The first two consecutive numbers to have
two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have
three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to
have four distinct prime factors. What is the
first of these numbers?
*/

// ANSWER //
Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};

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

function getPrimeFactors(number, primes) {
    var currPrimeIdx = 0;
    var primeFactors = [];
    var prime = primes[currPrimeIdx++];
    while (prime <= number) {
        if (!(number % prime)) {
            number = number / prime;
            if (primeFactors.indexOf(prime) === -1)
                primeFactors.push(prime);
        } else {
            prime = primes[currPrimeIdx++];
        }
    }
    return primeFactors;
}

function lengthsAllEquals(arrs, length) {
    for (var k = 0; k < arrs.length; k++) {
        if (arrs[k].length !== length) {
            return false;
        }
    }
    return true;
}

function getConsecutiveDistinctPrimes(length) {
    var primes = getPrimesBelow(250000);
    var numbers = Array.range(2, 2+length).map(function(a) {
        return getPrimeFactors(a, primes);
    });

    for (i = 2; i < 250000; i++) {
        if (lengthsAllEquals(numbers, length))
            return i;

        numbers.shift();
        numbers.push(getPrimeFactors(i + length, primes));
        continue;
    }
}

getConsecutiveDistinctPrimes(4);

// 134043
