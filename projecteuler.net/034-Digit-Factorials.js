// http://repl.it/ZHB

// PROBLEM //

/*
145 is a curious number, as
1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are
equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they
are not included.
*/

// ANSWER //
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};

function factorial(num){
    var p=1;
    var i=2;
    while (i <= num) {
        p*=i;i++;
    }
    return p;
}

function sumOfCuriousNumbers(max) {
    var totalSum = 0;
    var factorialMap = Array.range(0,10).map(factorial);

    for (var i = 10; i < max; i++) {
        var sum = i.toString().split('').reduce(function(s,v,i) {
            s += factorialMap[Number(v)];
            return s;
        }, 0);

        if (sum === i)
            totalSum += i;
    }

    return totalSum;
}

sumOfCuriousNumbers(2540161);

// 40730
