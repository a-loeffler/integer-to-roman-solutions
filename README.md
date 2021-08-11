# integer-to-roman-solutions

## LeetCode Problem # 12: Integer to Roman

### The Setup:
```
12. Integer to Roman

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 
12 is written as XII, which is simply X + II. The number 27 is written as XXVII, 
which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, 
the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. The same principle 
applies to the number nine, which is written as IX. There are six instances where 
subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Example 2:

Input: num = 4
Output: "IV"
Example 3:

Input: num = 9
Output: "IX"
Example 4:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= num <= 3999
```

## A few different approaches:

### Attempt #1
* The first solution does the conversion programmatically, using logarithms of base 10 to figure out the place value and how to do the conversion.
* This proved to be somewhat slow, with a higher O(n) time complexity, due to various logic tests at each stage.

### Attempt #2
* This second solution begins by implementing a hash, for 1:1 lookup of each Roman numeral for each integer of the initial number.  This reduced the time operations.
* The initial number was cast to a string and then to an array, so that the individual digits could be used for mapping.
* This proved to be about 30% faster, although it was somewhat unwieldy due to the initial place values being unpredictable.

### Attempt #3
* This third solution uses the same hash as the previous attempt.
* Instead of type castig to an array, this solution normalizes the initial number by adding 10000 to the initial amount, guaranteeing the amount of digits that the algorithm has to work with.
* This solution is only possible because the constraints in the original problem limit the initial number to a range of 0 to 3999.
* This solution proved to be the fastest, beating the previous solution by another 25% or so.  It did require a slightly larger amount of memory than attempt #2, but it was not a significant difference.
