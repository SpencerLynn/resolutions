// http://repl.it/03C

// PROBLEM //

/*
By replacing the 1st digit of the 2-digit number *3,
it turns out that six of the nine possible values:
13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with
the same digit, this 5-digit number is the first
example having seven primes among the ten generated numbers,
yielding the family:
56003, 56113, 56333, 56443, 56663, 56773, and 56993.
Consequently 56003, being the first member of this family,
is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number
(not necessarily adjacent digits) with the same digit, is part
of an eight prime value family.
*/

// ANSWER //
Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};
Function.memoize=function(f){var m={};return function(){var a=arguments;p=JSON.stringify(a);if(m.hasOwnProperty(p))return m[p];return m[p]=f.apply(null,a)}};
String.prototype.toNumber=function(){return Number(this)};

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

function replaceIndexes(num, indexes, newValue) {
    var digits = num.toString().split('');
    indexes.forEach(function(i) { digits[i] = newValue; });
    return digits.join('');
}

function getPrimeFamily(template) {
    var primes = getPrimesTo(1000000);
    var primeFamily = [];

    for (var i = 0; i < 10; i++) {
        var newValue = template.replace(/X/g, i).toNumber();
        // If 0 index was replaced with 0, skip the number
        if (template.length !== newValue.toString().length)
            continue;

        if (primes[newValue])
            primeFamily.push(newValue);
    }
    return primeFamily;
}

function findSmallestWithPrimeFamilySize(size) {
    var primes = getPrimesTo(1000000);
    var processed = {};

    for (var i = 10000; i < 1000000; i++) {
        var iLen = i.toString().length;

        for (var idx1 = 0; idx1 < iLen; idx1++)
        for (var idx2 = idx1+1; idx2 < iLen; idx2++)
        for (var idx3 = idx2+1; idx3 < iLen; idx3++) {
            var template = replaceIndexes(i, [idx1, idx2, idx3], 'X');

            if (processed[template])
                continue;

            var templatePrimes = getPrimeFamily(template);
            if (templatePrimes.length === size)
                return templatePrimes[0];

            processed[template] = true;
        }
    }
}

findSmallestWithPrimeFamilySize(8);

// 121313
