// http://repl.it/ZtL

// PROBLEM //

/*
The number, 1406357289, is a 0 to 9 pandigital number
because it is made up of each of the digits 0 to 9 in
some order, but it also has a rather interesting
sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on.
In this way, we note the following:

d[2]d[3]d[4]=406 is divisible by 2
d[3]d[4]d[5]=063 is divisible by 3
d[4]d[5]d[6]=635 is divisible by 5
d[5]d[6]d[7]=357 is divisible by 7
d[6]d[7]d[8]=572 is divisible by 11
d[7]d[8]d[9]=728 is divisible by 13
d[8]d[9]d[10]=289 is divisible by 17

Find the sum of all 0 to 9 pandigital numbers with this property.
*/

// ANSWER //
function getPandigitalNums(arr) {
    arr = arr || [0,1,2,3,4,5,6,7,8,9];
    var permutations = [];
    if (arr.length === 1) {
        return [ arr ];
    }

    for (var i = 0; i <  arr.length; i++) {
        var sub = arr.slice(0, i).concat(arr.slice(i + 1));
        var subPerms = getPandigitalNums(sub);
        for (var j = 0; j < subPerms.length; j++) {
            subPerms[j].unshift(arr[i]);
            permutations.push(subPerms[j]);
        }
    }
    return permutations;
}

function getNumber(digits, startIdx) {
    var s = String(digits[startIdx]) +
            String(digits[startIdx + 1]) +
            String(digits[startIdx + 2]);
    return Number(s);
}

function isPandigitalDivisible(digits) {
    if (digits.length === 9)
        digits.unshift('0');

    return getNumber(digits, 1) % 2 === 0 &&
        getNumber(digits, 2) % 3 === 0 &&
        getNumber(digits, 3) % 5 === 0 &&
        getNumber(digits, 4) % 7 === 0 &&
        getNumber(digits, 5) % 11 === 0 &&
        getNumber(digits, 6) % 13 === 0 &&
        getNumber(digits, 7) % 17 === 0;
}

function pandigitalSums() {
    return getPandigitalNums().reduce(function(s,d,i) {
        if (isPandigitalDivisible(d))
            s += Number(d.join(''));
        return s;
    }, 0);
}

var result = pandigitalSums();
console.log(result);

// 16695334890
