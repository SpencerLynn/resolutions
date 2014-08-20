// http://repl.it/XHF/1

// PROBLEM //

/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

// ANSWER //

var daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var isLeapYear = function (y) {
    if (Math.floor(y % 4) === 0) {
        if (Math.floor(y % 100) === 0 && Math.floor(y % 400) !== 0)
            return false;
        return true;
    }
    
    return false;
};

var findNumberOfFirstSundays = function() {
    var numberOfFirstSundays = 0;
    var currentDay = 2; // Tuesday
    
    for (var y = 1901; y <= 2000; y++) {
        var d = 1;
        var m = 0;
        while (m < 12) {    
            var daysInMonth = daysOfMonths[m];
            if (isLeapYear(y) && m == 1)
                daysInMonth += 1;
            
            d += daysInMonth;
            currentDay = (currentDay + daysInMonth) % 7;
            m++;
            
            if (currentDay === 0)
                numberOfFirstSundays++;
        }
    }
    
    return numberOfFirstSundays;
};

findNumberOfFirstSundays();

// 171