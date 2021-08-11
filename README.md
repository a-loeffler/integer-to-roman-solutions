# integer-to-roman-solutions

## A few different approaches to LeetCode # 12, "Integer to Roman".

## Attempt #1
* The first solution does the conversion programmatically, using logarithms of base 10 to figure out the place value and how to do the conversion.
* This proved to be somewhat slow, with a higher O(n) time complexity, due to various logic tests at each stage.

## Attempt #2
* This second solution begins by implementing a hash, for 1:1 lookup of each Roman numeral for each integer of the initial number.  This reduced the time operations.
* The initial number was cast to a string and then to an array, so that the individual digits could be used for mapping.
* This proved to be about 30% faster, although it was somewhat unwieldy due to the initial place values being unpredictable.

## Attempt #3
* This third solution uses the same hash as the previous attempt.
* Instead of type castig to an array, this solution normalizes the initial number by adding 10000 to the initial amount, guaranteeing the amount of digits that the algorithm has to work with.
* This solution is only possible because the constraints in the original problem limit the initial number to a range of 0 to 3999.
* This solution proved to be the fastest, beating the previous solution by another 25% or so.  It did require a slightly larger amount of memory than attempt #2, but it was not a significant difference.
