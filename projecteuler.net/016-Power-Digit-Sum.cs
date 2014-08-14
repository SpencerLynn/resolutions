// https://dotnetfiddle.net/Uly0zk

// PROBLEM //

/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

// ANSWER //

using System;
using System.Numerics;

public class Program
{
    public static void Main()
    {
        Console.WriteLine(SumOfDigits(2, 1000));
    }
    
    private static int SumOfDigits(int num, int pow)
    {
        var big = BigInteger.Pow(num, pow);
        var sum = 0;
        
        while (big > 0)
        {
            sum += (int)(big % 10);
            big /= 10;
        }
        
        return sum;
    }
}

// 1366