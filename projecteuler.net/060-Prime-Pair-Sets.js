// http://repl.it/19R

// PROBLEM //

/*
The primes 3, 7, 109, and 673, are quite remarkable.
By taking any two primes and concatenating them in any
order the result will always be prime. For example,
taking 7 and 109, both 7109 and 1097 are prime.
The sum of these four primes, 792, represents the lowest
sum for a set of four primes with this property.

Find the lowest sum for a set of five primes for which
any two primes concatenate to produce another prime.
*/

// ANSWER //
Array.prototype.last=function(){return this[this.length-1]};
Object.prototype.keys=function(){return Object.keys(this)};
Array.prototype.any=function(f){for(var i=0;i<this.length;)if(f(this[i++]))return !0;return !1};
Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};
Function.memoize=function(f){var m={};return function(){var a=arguments;p=JSON.stringify(a);if(m.hasOwnProperty(p))return m[p];return m[p]=f.apply(null,a)}};
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)},0)};
function numericSort(a,b){return a-b}

var getPrimesTo = Function.memoize(function(n) {
    var primeMap = Array.fill(n, true);
    primeMap[0]=primeMap[1]=false;

    var sqrtN = Math.sqrt(n);
    for (var i = 2; i < sqrtN; i++) {
        if (primeMap[i])
            for (var j = i * i; j < n; j += i)
                primeMap[j] = false;
    }

    return primeMap.reduce(function(p,f,i){
        if (f)
            p[i] = true;
        return p;
    },{});
});

var getSortedPrimeKeysTo = Function.memoize(function(n) {
    var primes = getPrimesTo(n);
    return primes.keys().map(Number).sort(numericSort).map(String);
});

var isPrime = Function.memoize(function(n) {
    if (n.length < 8)
        return getPrimesTo(10000000)[n];

    if (n <= 1)
        return false;
    else if (n % 2 === 0)
        return false;
    else if (n % 3 === 0)
        return false;

    var sqrtN = Math.sqrt(n);
    for (var i = 5; i < sqrtN; i += 6) {
        if (n % i === 0)
            return false;
        else if (n % (i + 2) === 0)
            return false;
    }
    return true;
});

var getPrimePairs = Function.memoize(function(n) {
    var primeKeys = getSortedPrimeKeysTo(20000);
    var primePairs = {};
    for (var i = 1; i < primeKeys.length; i++) {
        var iN = String(primeKeys[i]) + String(n);
        var nI = String(n) + String(primeKeys[i]);
        if (isPrime(iN) && isPrime(nI))
            primePairs[primeKeys[i]] = true;
    }
    return primePairs;
});

function findPrimePairSets(setLength, set, smallestSum) {
    set = set || [];
    smallestSum = smallestSum || Number.MAX_VALUE;

    if (set.length == setLength) {
        var finalSum = set.map(Number).sum();
        if (smallestSum > finalSum)
            smallestSum = finalSum;
        return smallestSum;
    }

    var primeKeys = getSortedPrimeKeysTo(20000);
    var startIdx = set.length ? primeKeys.indexOf(set.last()) + 1 : 1;
    for (var i = startIdx; i < primeKeys.length; i++) {
        var nextPrime = primeKeys[i];
        var nextSum = set.map(Number).sum() + (Number(nextPrime) * (5-set.length));
        if (nextSum > smallestSum)
            continue;
        var notInAnySet = set.any(function(p) {
            return !getPrimePairs(p)[nextPrime];
        });
        if (notInAnySet)
            continue;

        var sum = findPrimePairSets(setLength, set.concat([nextPrime]), smallestSum);
        if (smallestSum > sum)
            smallestSum = sum;
    }

    return smallestSum;
}

findPrimePairSets(5);

// 26033
