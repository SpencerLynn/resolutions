// http://repl.it/Zyn

// PROBLEM //

/*
Triangle, pentagonal, and hexagonal numbers are generated
by the following formulae:

Triangle	 	Tn=n(n+1)/2
1, 3, 6, 10, 15, ...

Pentagonal	 	Pn=n(3n−1)/2
1, 5, 12, 22, 35, ...
Hexagonal	 	Hn=n(2n−1)
1, 6, 15, 28, 45, ...

It can be verified that T285 = P165 = H143 = 40755.

Find the next triangle number that is also pentagonal
and hexagonal.
*/

// ANSWER //
// Inverse Functions found:
// http://en.wikipedia.org/wiki/Hexagonal_number
// http://en.wikipedia.org/wiki/Pentagonal_number
// http://en.wikipedia.org/wiki/Triangular_number
function getHexagonal(n) {
    return n * (2 * n - 1);
}

function invertHexagonal(n) {
    return (Math.sqrt(8 * n + 1) + 1) / 4;
}

function isHexagonal(n) {
    var m = invertHexagonal(n);
    return m == Math.floor(m);
}

function isPentagonal(n) {
    var m = (Math.sqrt(24 * n + 1) + 1) / 6;
    return m == Math.floor(m);
}

function isTriangular(n) {
    var m = (Math.sqrt(8 * n + 1) - 1) / 2;
    return m == Math.floor(m);
}

function isAll(n) {
    return isHexagonal(n) &&
           isPentagonal(n) &&
           isTriangular(n);
}

function getNext(number) {
    var i = invertHexagonal(number);
    while(true) {
        i++;
        number = getHexagonal(i);
        if (isAll(number))
            return number;
    }
}

getNext(40755);

// 1533776805
