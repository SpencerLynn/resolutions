// http://repl.it/Wsy

// PROBLEM //

/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

// ANSWER //

Number.prototype.factorial=function(){var p=1;var i=2;while (i <= this) {p*=i;i++;} return p;};

var getLatticePaths = function (squareSize) {
    // Each path has to be 2 * squareSize in length
    // There are two possibilities - Right and Down (R & D)
    // If a space is R it cannot be D
    // So we really just want to know how many ways we can put 
    //  {squareSize} Rs into {squareSize * 2} spots
    // So {squareSize * 2} choose {squareSize}
    // c choose k = (c!)/(k!*(c-k)!)
    var numerator = (squareSize * 2).factorial();
    var denomPart = (squareSize.factorial());
    
    return numerator / (denomPart * denomPart);
}

getLatticePaths(20);

// 137846528820