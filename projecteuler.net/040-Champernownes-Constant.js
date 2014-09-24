// http://repl.it/ZmL

// PROBLEM //

/*
An irrational decimal fraction is created by concatenating
the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If d[n] represents the nth digit of the fractional part,
find the value of the following expression.

d[1] × d[10] × d[100] × d[1000] × d[10000] × d[100000] × d[1000000]
*/

// ANSWER //
Array.prototype.last=function(){return this[this.length-1]};
Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};

function partProduct(indices) {
    var verticeDigitMap = [0];

    var digit = 1;

    while (verticeDigitMap.last() < indices.last()) {
        var low = String(1) + Array.fill(digit-1, 0).join('');
        var high = Array.fill(digit, 9).join('');

        var numChars = (Number(high) - Number(low) + 1) * digit;
        verticeDigitMap.push(verticeDigitMap.last() + numChars);

        digit++;
    }

    var product = 1;
    for (var i = 0; i < indices.length; i++) {
        var indice = indices[i];
        var largestSmallerVtx = 0;
        var largestSmallerVtxIdx = 0;

        for (var v = 0; v < verticeDigitMap.length; v++) {
            if (verticeDigitMap[v] < indice &&
                verticeDigitMap[v] > largestSmallerVtx) {
                largestSmallerVtx = verticeDigitMap[v];
                largestSmallerVtxIdx = v;
            }
        }

        var numDigitsInFoundRange = largestSmallerVtxIdx + 1;
        var numsBeneathFoundRange = Number(Array.fill(largestSmallerVtxIdx, 9).join(''));

        var num = Math.floor((indice - largestSmallerVtx) / numDigitsInFoundRange);
        num += numsBeneathFoundRange;
        var rem = (indice - largestSmallerVtx) % numDigitsInFoundRange;

        product *= rem === 0 ? num : (num + 1).toString().split('')[rem - 1];
    }

    return product;
}

partProduct([1, 10, 100, 1000, 10000, 100000, 1000000]);

// 210
