// http://repl.it/Zce

// PROBLEM //

/*
If p is the perimeter of a right angle triangle
with integral length sides, {a,b,c}, there are
exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number
of solutions maximised?
*/

// ANSWER //

function maxRightTriangleTriplets(max) {
    var largest = 0;
    var largestCount = 0;

    for (var i = 12; i <= max; i++) {
        var count = 0;

        for (var a = 1; a < i/3; a++) {
            for (var b = a+1; b < i-a; b++) {
                var c = i - a - b;
                if (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)) {
                    count++;
                }
            }
        }

        if (count > largestCount) {
            largestCount = count;
            largest = i;
        }
    }

    return largest;
}

maxRightTriangleTriplets(1000);

// 840
