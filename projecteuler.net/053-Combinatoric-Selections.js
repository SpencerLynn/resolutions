// http://repl.it/034

// PROBLEM //

/*
There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5c3 = 10.

In general,

nCr =	(n!) / (r!(n−r)!),
where r ≤ n, n! = n×(n−1)×...×3×2×1, and 0! = 1.

It is not until n = 23, that a value exceeds one-million:

23c10 = 1144066.

How many, not necessarily distinct, values of  nCr,
for 1 ≤ n ≤ 100, are greater than one-million?
*/

// ANSWER //
Number.prototype.factorial=function(){var p=1,n=2;while(n<=this)p*=n++;return p};

function combinatoricSelections(maxN, greaterThan) {
    var count = 0;
    for (var n = 1; n <= maxN; n++)
    for (var r = 1; r <= n; r++) {
        var nCr = n.factorial() / (r.factorial() * (n - r).factorial());
        if (nCr > greaterThan)
            count++;
    }
    return count;
}

combinatoricSelections(100, 1000000);

// 4075
