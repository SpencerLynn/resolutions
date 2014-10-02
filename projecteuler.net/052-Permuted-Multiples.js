// http://repl.it/03Q

// PROBLEM //

/*
It can be seen that the number, 125874,
and its double, 251748, contain exactly
the same digits, but in a different order.

Find the smallest positive integer, x,
such that 2x, 3x, 4x, 5x, and 6x, contain
the same digits.
*/

// ANSWER //

function getSortedString(n) {
    return n.toString().split('').sort().join('');
}

function arePermutations(a, b) {
    return getSortedString(a) == getSortedString(b);
}

function smallestPermMultiples(xTimes) {
    for (var i = 100000; i < 10000000; i++) {
        var allPerms = true;
        for (var x = 2; x <= xTimes; x++) {
            var ix = i * x;
            if (!arePermutations(i, ix)) {
                allPerms = false;
                break;
            }
        }
        if (allPerms)
            return i;
    }
}

smallestPermMultiples(6);

// 142857
