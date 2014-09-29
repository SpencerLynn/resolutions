// https://dotnetfiddle.net/hszAs6

// PROBLEM //

/*
The series:
1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series:
1^1 + 2^2 + 3^3 + ... + 1000^1000.
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
		System.Console.WriteLine(LastDigitsInSeries(10, 1000));
	}

	public static string LastDigitsInSeries(int count, int max)
	{
		return Enumerable.Range(1, max).Select(i => BigInteger.Pow(i,i)).Sum().ToString().SubstringFromEnd(10);
	}
}

public static class StringExtensions
{
	public static String SubstringFromEnd(this string s, int count)
	{
		return s.Substring(s.Length - count);
	}
}

public static class EnumerableExtensions
{
	public static BigInteger Sum(this IEnumerable<BigInteger> e)
	{
		return e.Aggregate((a,b) => a+b);
	}
}

// 9110846700
