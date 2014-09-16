// http://repl.it/ZHd

// PROBLEM //

/*
The number, 197, is called a circular prime because
all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100:
2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

// ANSWER //
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};
Array.prototype.fill=function(v){var i=0,a=[];while(i++<this.length)a.push(v);return a};

function permutator (input) {
    var options = [input];
    var digits = input.toString().split('');
    for (var i = 1; i < digits.length; i++) {
        var first = digits.splice(0, 1);
        digits.push(first);
        options.push(digits.join(''));
    }
    return options;
}

function getCircularPrimeCount(max) {
    var allNumbers = Array.range(0,max).fill(true);
    allNumbers[0] = false;
    allNumbers[1] = false;

    for (var i = 2; i < Math.sqrt(max); i++) {
        if (allNumbers[i]) {
            for (var j = i*2; j < max; j += i) {
                allNumbers[j] = false;
            }
        }
    }

    return allNumbers.reduce(function(count, isPrime, i, a) {
        if (isPrime) {
            var permutations = permutator(i);
            var allPermsPrime = true;
            for (var p = 0; p < permutations.length; p++) {
                if (!a[Number(permutations[p])]) {
                    allPermsPrime = false;
                    break;
                }
            }

            if (allPermsPrime)
                count ++;
        }
        return count;
    }, 0);
}

getCircularPrimeCount(1000000);

// 55
