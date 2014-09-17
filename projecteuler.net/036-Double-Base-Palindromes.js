// http://repl.it/ZLo

// PROBLEM //

/*
The decimal number, 585 = 10010010012 (binary),
is palindromic in both bases.

Find the sum of all numbers, less than one million,
which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either
base, may not include leading zeros.)
*/

// ANSWER //

function isPalindrome(num) {
    var numString = num.toString();
    return numString == numString.split('').reverse().join('');
}

function sumDoubleBasePalindromes(max) {
    var sum = 0;
    for (var i = 1; i < max; i++) {
        if (!isPalindrome(i))
            continue;
        if (!isPalindrome(i.toString(2)))
            continue;
        sum += i;
    }
    return sum;
}

sumDoubleBasePalindromes(1000000);

// 872187
