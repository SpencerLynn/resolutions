// http://repl.it/Zcc

// PROBLEM //

/*
Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital,
192384576. We will call 192384576 the concatenated product
of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by
1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is
the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be
formed as the concatenated product of an integer with (1,2, ... , n)
where n > 1?
*/

// ANSWER //
Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};

function isPandigital(num) {
    return num.toString().split('').sort().join('') == '123456789';
}

function largestPandigitalConcat(numDigits) {
    var largest = 0;

    // Since n > 1, n <= 2. So /2 for the smallest # digits
    var maxDivisorLength = Math.floor(numDigits/2);
    var maxDivisor = Number(Array.fill(maxDivisorLength, 9).join(''));

    for (var d = 1; d < maxDivisor; d++) {
        var sum = (d * 1).toString();
        var i = 2;
        while (sum.length < 9) {
            sum += (d * i).toString();
            i++;
        }

        var sumNum = Number(sum);

        if (sum.length === 9 && isPandigital(sum) && sumNum > largest)
            largest = sumNum;
    }

    return largest;
}

largestPandigitalConcat(9);

// 932718654
