// PROBLEM //

/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the
number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28,
which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is
called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number
that can be written as the sum of two abundant numbers is 24. By mathematical analysis,
it can be shown that all integers greater than 28123 can be written as the sum of two abundant
numbers. However, this upper limit cannot be reduced any further by analysis even though it
is known that the greatest number that cannot be expressed as the sum of two abundant numbers
is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

// ANSWER //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};

function findFactorsSum (num) {
    var factorsSum = 1;

    var currentFactor = 2;
    var highFactor = num/2;

    while (currentFactor <= highFactor) {
        if (num % currentFactor === 0) {
            factorsSum += currentFactor;
            if (currentFactor !== highFactor)
                factorsSum += highFactor;
        }

        currentFactor++;
        highFactor = num/currentFactor;
    }

    return factorsSum;
};

function findSumNumbersNotAbundantSum(maxNumber) {
    var numberMap = Array.fill(maxNumber, false);

    for (var i = 2; i < maxNumber; i++) {
        numberMap[i] = findFactorsSum(i) > i;
    }

    var abundantNums = numberMap.reduce(function (a, f, i) {
        if (f)
            a.push(i);
        return a;
    }, []);

    var notSumAbundantNums = Array.fill(maxNumber, true);

    for (var i = 0; i < abundantNums.length; i++) {
        for (var j = 0; j < abundantNums.length; j++) {
            var sum = abundantNums[i] + abundantNums[j];
            if (sum < maxNumber)
                notSumAbundantNums[sum] = false;
        }
    }

    return notSumAbundantNums.reduce(function (s, n, i) {
        if (n)
            s += i;
        return s;
    }, 0);
};

console.log(findSumNumbersNotAbundantSum(28123));

// 4179871
