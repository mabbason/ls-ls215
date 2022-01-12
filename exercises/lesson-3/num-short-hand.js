"use strict"
/*
i: string representing a list of numbers in shorthand format
o: array of numbers (long format)
r: the seperators for the ranges may vary
  - "-", ":", or ".."
  - each number at the next index is greater than the number at the previous index

e: 
"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
  - No seperators, erego infer number from number comparison
  - 2 < 7 means it must be 12 NOT 2. Same thing 1 < 4 so must be greater erego 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
  - indicates a range for included numbers with "-" seperator 
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
  - indicates a range for included numbers with ":" seperator 
"104-2" --> 104, 105, ... 112
  - 2 < 104 so add '10' to the front, but 102 still < 104, so increment it by smallest possible
    - it was missing 2 digits, so copy the front two digits from the first number
"104-02" --> 104, 105, ... 202
  - 02 < 104, only missing 1 num, so add the 1. BUT still smaller, so increment the 1 until the num is bigger 
"545, 64:11" --> 545, 564, 565, .. 611

a:
write function expandShortHand takes single string as arg
  - split intput into an array with each element representing a number or range of numbers
  - iterate over array, transform each element
    - get previous number
    - if the current element is a range (if it includes one of the seperators)
      - call getRangeOfNums helper function
    - else if number is smaller than the previous number
      - call getNextNum, pass in the previous number and the current shorthand number
    - else 
      - return current num string converted to number

helper function getRangeOfNums 
  (returns an array with all the numbers in the range)
  - 

helper function getNextNum, takes two args: previous number and current shorthand number
  (returns just the expanded number)
  - 

*/