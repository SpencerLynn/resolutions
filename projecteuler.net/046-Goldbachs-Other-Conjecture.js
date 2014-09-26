// http://repl.it/ZzT

// PROBLEM //

/*
It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×12
15 = 7 + 2×22
21 = 3 + 2×32
25 = 7 + 2×32
27 = 19 + 2×22
33 = 31 + 2×12

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

// ANSWER //
Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};

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

function isTwiceSquare(n) {
    var r = Math.sqrt(n/2);
    return Math.floor(r) === r;
}

function smallestOddGoldbach() {
    var primes = getPrimesBelow(10000);

    for (var i = 35; i < 10000; i += 2) {
        if (primes.indexOf(i) !== -1)
            continue;

        var canBeWritten = false;
        for (var p = 0; p < primes.length; p++) {
            if (isTwiceSquare(i - primes[p])) {
                canBeWritten = true;
                break;
            }
        }

        if (!canBeWritten)
            return i;
    }
}

smallestOddGoldbach();

// 5777
