// http://repl.it/0Al

// PROBLEM //

/*
The arithmetic sequence, 1487, 4817, 8147, in which
each of the terms increases by 3330, is unusual in two ways:
(i) each of the three terms are prime, and,
(ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three
1-, 2-, or 3-digit primes, exhibiting this property,
but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the
three terms in this sequence?
*/

// ANSWER //
Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};

function getPermutations(arr) {
    var permutations = [];
    if (arr.length === 1) {
        return [ arr ];
    }

    for (var i = 0; i <  arr.length; i++) {
        var sub = arr.slice(0, i).concat(arr.slice(i + 1));
        var subPerms = getPermutations(sub);
        for (var j = 0; j < subPerms.length; j++) {
            subPerms[j].unshift(arr[i]);
            permutations.push(subPerms[j]);
        }
    }
    return permutations;
}

function getPrimes(min, max) {
    var allNumbers = Array.fill(max, true);
    allNumbers[0] = false;
    allNumbers[1] = false;

    for (var i = 2; i < max; i++) {
        if (allNumbers[i]) {
            for (var j = i*2; j< max; j += i) {
                allNumbers[j] = false;
            }
        }
    }

    return allNumbers.reduce(function(a, p, i) {
        if (p && i > min) a.push(i);
        return a;
    }, []);
}

function getSequences() {
    var sequences = {};
    var primes = getPrimes(1000, 9999);

    for (var i = 0; i < primes.length; i++) {
        var perms = getPermutations(primes[i].toString().split(''));
        perms = perms.reduce(function(a, v) {
            var vNum = Number(v.join(''));
            if (primes.indexOf(vNum) !== -1)
                if (a.indexOf(vNum) === -1)
                    a.push(vNum);
            return a;
        }, []);

        perms.sort();

        for (var j = 0; j < perms.length; j++) {
            var p = perms[j];
            for (var k = j+1; k < perms.length; k++) {
                var q = perms[k];
                var r = q + (q - p);
                if (perms.indexOf(r) !== -1) {
                    if (!sequences[p])
                        sequences[p] = [p, q, r];
                    break;
                }
            }
        }
    }

    return sequences;
}

var result = "";
var sequences = getSequences();
for (s in sequences) {
    if (s != 1487) {
        result = sequences[s].join('');
    }
}
console.log(result);

// 296962999629
