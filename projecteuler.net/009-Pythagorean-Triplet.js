// http://repl.it/W4A/3

// PROBLEM //

/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

// ANSWER //

Array.prototype.product=function(){return this.reduce(function(p,n){return p*n},1)};
Array.prototype.isPythagorean=function(){return Math.pow(this[0],2) + Math.pow(this[1],2) === Math.pow(this[2],2)};

var findPythagoreanTripletWithSum = function(sum) {
    for (var x = 1; x < sum/3; x++) {
        for (var y = x+1; y < sum; y++) {
            var arr = [x, y, sum-x-y];
            if (arr.isPythagorean())
                return arr;
        }
    }
};

findPythagoreanTripletWithSum(1000).product();

// 31875000