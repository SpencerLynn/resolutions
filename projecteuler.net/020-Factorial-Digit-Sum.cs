// https://dotnetfiddle.net/uiZSOT

// PROBLEM //

/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

// ANSWER //

using System;
using System.Linq;
using System.Numerics;

public class Program
{
    public static void Main()
    {
        Console.WriteLine(FactorialDigitsSum(100));
    }
    
    private static int FactorialDigitsSum(int num)
    {
		return Factorial(num).ToString().Select(s => int.Parse(s.ToString())).Sum();
    }
	
	private static BigInteger Factorial(BigInteger num)
	{
		if (num == 1)
			return 1;
		return num * Factorial(num -1);
	}
}

// 648