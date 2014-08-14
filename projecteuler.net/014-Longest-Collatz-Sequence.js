// http://repl.it/WtF

// PROBLEM //

/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

// ANSWER // 

Number.prototype.isOdd=function(){return this%2};
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};
Array.prototype.fill=function(v){var i=0,a=[];while(i++<this.length)a.push(v);return a}

var findLongestCollatzSequence = function(max) {
    var map = Array.range(0, max+1).fill(-1);
    map[1] = 1;
    
    var longest = 1;
    var longestBeginNumber = 1;
    var currSeqLast = 0;
    
    for (var i = 2; i <= max; i++) {
        currSeqLast = i;
        var seqCount = 0;
        while (currSeqLast != 1 && currSeqLast >= i) {
            seqCount++;
            if (currSeqLast.isOdd())
                currSeqLast = 3 * currSeqLast + 1;
            else
                currSeqLast /= 2;
        }
        
        // Found 1 or a sequence length we already know
        map[i] = seqCount + map[currSeqLast];
        
        if (map[i] > longest) {
            longest = map[i];
            longestBeginNumber = i;
        }
    }
    
    return longestBeginNumber;
};

findLongestCollatzSequence(1000000);

// 837799