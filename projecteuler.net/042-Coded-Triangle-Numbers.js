// http://jsfiddle.net/pbg5kmh0/

// PROBLEM //

/*
The nth term of the sequence of triangle numbers is given by,
tn = ½n(n+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding
to its alphabetical position and adding these values we form '
a word value. For example, the word value for SKY is
19 + 11 + 25 = 55 = t10.
If the word value is a triangle number then we shall call
the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'),
a 16K text file containing nearly two-thousand common English
words, how many are triangle words?
*/

// ANSWER //
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};
String.prototype.wordValue = function() {
    var chars = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return this.split('').reduce(function(s, c) {
        s += chars.indexOf(c);
        return s;
    }, 0);
}

function getTriangleSequence(max) {
    return Array.range(1, max + 1).map(function(i) {
        return (i/2) * (i+1);
    });
}

function getTriangleWordCount(words) {
    var triangleSeq = getTriangleSequence(100);

    return words.reduce(function(s, w) {
        if (triangleSeq.indexOf(w.wordValue()) !== -1)
            s++;
        return s;
    }, 0);
}

getTriangleWordCount(Words.allWords);

// 162
