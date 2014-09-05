// http://repl.it/YW4

// PROBLEM //

/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

// ANSWER //

function sumCornersForDim(d) {
    // The upper right square is (2*d + 1)^2
    // Going counter-clockwise, you sum take the upper right corner and
    //  subtract 2*d each corner
    // Final formula:
    // ((2*d + 1)^2)
    //  + ((2*d + 1)^2 - (2*d))
    //  + ((2*d + 1)^2 - 2*(2*d))
    //  + ((2*d + 1)^2 - 3*(2*d))
    // => 4((2*d + 1)^2) - 6(2*d)
    // => 4((2*d + 1)^2) - 12*d
    // This formula is for one dimension. Add the next dimension to this result
    if (d < 0)
        return 0;
    if (d === 0)
        return 1;

    return (4 * Math.pow(2 * d + 1, 2) - (12 * d)) + sumCornersForDim(d - 1);
}

function diagonalSumForGrid(size) {
    if (size < 1)
        throw "Cannot have grid with side length less than 1";
    else if (size === 1)
        return 1;

    return sumCornersForDim(Math.floor(size / 2));
}

diagonalSumForGrid(1001);

// 669171001
