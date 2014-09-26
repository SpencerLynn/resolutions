// https://dotnetfiddle.net/kvyMEI

// PROBLEM //

/*
The series:
1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series:
1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/

// ANSWER //

using System;
using System.Numerics;

public class Program
{
	public static void Main()
	{
		System.Console.WriteLine(LastDigitsInSeries(10, 1000));
	}

	public static BigInteger LastDigitsInSeries(int count, int max)
	{
		var sum = new BigInteger(0);

		for (var i = 1; i <= max; i++)
			sum += BigInteger.Pow(i, i);

		var sumString = sum.ToString();
		return BigInteger.Parse(sumString.Substring(sumString.Length - count));
	}
}

// 9110846700
