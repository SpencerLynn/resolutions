// http://repl.it/XMU

// PROBLEM //

/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

// ANSWER //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};

var findFactorsSum = function (num) {
    var factorsSum = 1;
    
    var highFactor = num/2;
    var currentFactor = 2;
    
    while (currentFactor <= highFactor) {
        if (num % currentFactor === 0 && 
            currentFactor !== num/currentFactor) {
            factorsSum += currentFactor;
            factorsSum += num/currentFactor;
        }
        
        currentFactor++;
        highFactor = num/currentFactor;
    }
    
    return factorsSum;
};

var findAmicableFactorsSum = function (num) {
    return Array.fill(num+1, 0)
        .map(function (v, i) {
            return findFactorsSum(i);
        })
        .reduce(function (s, v, i , a) {
            if (v > a.length || i === 0)
                return s;
            else if (i === a[v] && i !== a[i]) {
                s += i;
            }
            return s;
        }, 0);
};

findAmicableFactorsSum(10000);

// 31626