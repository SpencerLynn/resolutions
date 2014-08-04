// http://jsfiddle.net/AhN5W/4/

// PROBLEM //

/*
A palindromic number reads the same both ways. The largest palindrome
made from the product of two 2-digit numbers is 9009 = 91 * 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// ANSWER //

function largestPalindromeProduct(low, high) {
    var largest = 0;
    for (var i = high; i > low; i--) {
        for (var j = i; j > low; j--) {
            var product = i * j;
            if (isPalindrome(product) && product > largest)
                largest = product;
        }
    }
    return largest;
}

function isPalindrome(num) {
    var numString = num.toString();
    return numString == numString.split('').reverse().join('');
}

var result = largestPalindromeProduct(100, 999);


// 906609