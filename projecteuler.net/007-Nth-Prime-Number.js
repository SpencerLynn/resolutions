// http://repl.it/WYm

// PROBLEM //

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10001st prime number?
*/

// ANSWER //

Array.prototype.any=function(f){for(var i=0;i<this.length;)if(f(this[i++]))return !0;return !1};
Array.prototype.last=function(){return this[this.length-1]};

function isMultiple(num, factors) {
    return factors.any(function (factor) {
        return num % factor === 0; 
    });
}

function getNextPrime(primes) {
    var begin = primes.last();
    begin += (begin === 2) ? 1 : 2;
    while (isMultiple(begin, primes))
        begin += 2;
    return begin;
}

function getNthPrime(n) {
    var primes = [2];
    while (primes.length < n) {
        primes.push(getNextPrime(primes));
    }
    return primes.last();
}

getNthPrime(10001);

// 104743