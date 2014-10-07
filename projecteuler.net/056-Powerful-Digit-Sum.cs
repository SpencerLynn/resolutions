// https://dotnetfiddle.net/yV88Vz

// PROBLEM //

/*
A googol (10^100) is a massive number: one followed by one-hundred zeros;
100^100 is almost unimaginably large: one followed by two-hundred zeros.
Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form,
a^b,
where a, b < 100,

what is the maximum digital sum?
*/

// ANSWER //
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

public class Program
{
	public static void Main()
	{
		Console.WriteLine(GetMaxDigitSum(100, 100));
	}

	private static int GetMaxDigitSum(int maxA, int maxB)
	{
		var maxDigitSum = 0;
		for (var a = 1; a < maxA; a++)
		{
			for (var b = 1; b < maxB; b++)
			{
				var aToBSum = BigInteger.Pow(a, b).DigitSum();
				if (aToBSum > maxDigitSum)
					maxDigitSum = aToBSum;
			}
		}
		return maxDigitSum;
	}
}

public static class BigIntegerExtensions
{
	public static int DigitSum(this BigInteger bInt)
	{
		return bInt.ToString().Select(c => int.Parse(c.ToString())).Sum();
	}
}

// 972
