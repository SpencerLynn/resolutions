// https://dotnetfiddle.net/ooH4ZP

// PROBLEM //

/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// ANSWER //

using System;
using System.Collections.Generic;
using System.Linq;

public class Program
{
	public static void Main()
	{
		var primeFactors = PrimeFactorization(600851475143);
		Console.WriteLine(string.Join(",", primeFactors.ToList()));
		Console.WriteLine("Largest: " + primeFactors.Max());
	}
	
	public static IEnumerable<long> PrimeFactorization(long number)
	{
		var primesBelow = FindAllPrimeNumbersBelow(number).Where(num => num != 1);
		
		while (number > 1)
		{
			var smallestPrime = primesBelow.First(num => number % num == 0);
			
			yield return smallestPrime;
			
			number = number / smallestPrime;
		}
	}
	
	public static IEnumerable<long> FindAllPrimeNumbersBelow(long number)
	{
		return Range(1, number).Where(num => IsPrime(num));
	}
	
	public static bool IsPrime(long number)
	{
		if (number == 2)
			return true;
		
		return !Range(2, number/2).Any(num => number % num == 0);
	}
	
	public static IEnumerable<long> Range(long begin, long end)
	{
		while (begin < end)
		{
			yield return begin++;
		}
	}
}

// 71,839,1471,6857
// Largest: 6857