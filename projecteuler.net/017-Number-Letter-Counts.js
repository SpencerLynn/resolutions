// http://repl.it/XFe/1

// PROBLEM //

/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

// ANSWER //

var oneThruNine = ["one","two","three","four","five","six","seven","eight","nine"];
var elevenThruNineteen = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
var twentyThruNinety = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    
var sumNumberCharactersLessThanOneThousand = function() {
    var sum = 0;
    
    // 1-9
    var oneToNine = oneThruNine.join('').length;
    sum += oneToNine;
    
    // 10
    var ten = "ten".length;
    sum += ten;
    
    // 11-19
    var elevenToNineteen = elevenThruNineteen.join('').length;
    sum += elevenToNineteen;
    
    // 20, 30, 40, ... 90
    var twentyToNinety = twentyThruNinety.join('').length;
    sum += twentyToNinety;
    
    // 21-29, 31-39, ... 91-99
    var twentyOneToNinetyNine = twentyThruNinety.reduce(function(a,v) {
        for (var i = 0; i < oneThruNine.length; i++) {
            a.push(v + oneThruNine[i]);
        }
        return a;
    }, []).join('').length;
    sum += twentyOneToNinetyNine;
    
    var oneToNinetyNine = sum;
    
    // 100-999
    sum += oneThruNine.reduce(function(s,v) {
        // x00
        s += v.length * 100;
        s += "hundred".length;
        
        // x01-x99
        s += oneToNinetyNine;
        s += "hundredand".length * 99;
        
        return s;
    }, 0);
    
    // 1000
    sum += "onethousand".length;
    
    return sum;
};

sumNumberCharactersLessThanOneThousand();

// 21124