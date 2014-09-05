// http://repl.it/YWL

// PROBLEM //

/*
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

// ANSWER //

function getRecurringCycleLength(denom) {
    var res = 1 / denom;
    var decimal = res.toString().split('.')[1];

    if (decimal.length < 2)
        return 1;

    var rem = 1 % denom;
    var remainders = [];
    while (rem !== 0 && remainders.indexOf(rem) === -1) {
        remainders.push(rem);
        rem = (rem * 10) % denom;
    }

    // Current value for 'rem' already exists in array OR is 0
    if (rem === 0) {
        return 0;
    } else {
        return remainders.length - remainders.indexOf(rem);
    }
}

function getLongestRecurringCycle(limit) {
    var longestCycle = 0;
    var longestNum = 1;

    for (var i = 2; i < limit; i++) {
        var cycleLength = getRecurringCycleLength(i);
        if (cycleLength > longestCycle) {
            longestCycle = cycleLength;
            longestNum = i;
        }
    }

    return longestNum;
}

getLongestRecurringCycle(1000);

// 983
