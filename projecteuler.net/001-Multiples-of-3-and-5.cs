// https://dotnetfiddle.net/rvDkQa

// PROBLEM //

/*
If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

// ANSWER

using System;
using System.Collections.Generic;
using System.Linq;
					
public class Program
{
	/*
		If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
		Find the sum of all the multiples of 3 or 5 below 1000.
	*/
	
	private static readonly int BASE_NUM_1 = 3;
	private static readonly int BASE_NUM_2 = 5;
	
	public static void Main()
	{
		var numbersToCheck = new int[] { 10, 1000 };
		
		foreach (var number in numbersToCheck)
		{
			Console.WriteLine(string.Format("Sum of multiples of {0} and {1} below {2} is {3}", 
										BASE_NUM_1, 
										BASE_NUM_2, 
										number, 
										SumOfMultiplesBelowNumber(number)));	
		}
	}
	
	private static long SumOfMultiplesBelowNumber(int maxValue)
	{
		return Enumerable.Range(1, maxValue-1)
						 .Where(num => num % BASE_NUM_1 == 0 || num % BASE_NUM_2 == 0)
						 .Sum();
	}
}

// Sum of multiples of 3 and 5 below 10 is 23
// Sum of multiples of 3 and 5 below 1000 is 233168