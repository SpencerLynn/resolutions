// http://repl.it/W9o

// PROBLEM //

/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

// ANSWER //
// NOTE: Building the list of all numbers and whether they are prime or not
//  is came from @JoeyRobichaud (http://www.joeyrobichaud.com/)

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.fill=function(v){var i=0,a=[];while(i++<this.length)a.push(v);return a}

function getPrimesSumBelow(max) {
    var allNumbers = Array.range(0,max).fill(true);
    allNumbers[0] = false;
    allNumbers[1] = false;
    
    for (var i = 2; i < Math.sqrt(max); i++) {
        if (allNumbers[i]) {
            for (var j = i*2; j< max; j += i) {
                allNumbers[j] = false;
            }
        }
    }
    
    return allNumbers.reduce(function(sum, isPrime, i) {
        sum += (isPrime) ? i : 0;
        return sum;
    }, 0);
}

getPrimesSumBelow(2000000);

// 142913828922