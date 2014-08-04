// http://jsfiddle.net/8kRLn/

// PROBLEM //

/*
2520 is the smallest number that can be divided by each of the numbers from
1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/

// ANSWER //

var isMultiple = function (factors, num) {
    for (var i = 0; i < factors.length; i++) {
        if (num % factors[i] != 0)
            return false;
    }
    return true;
}

var smallestMultiple = function (factors) {
    factors = factors.sort(function (a,b) { return a-b });
    
    var largestFactor = factors[factors.length-1];
    var smallestMultiple = largestFactor;
    while (!isMultiple(factors, smallestMultiple)) {
        smallestMultiple += largestFactor;
    }
    return smallestMultiple;
}

var result = smallestMultiple([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

// 232792560