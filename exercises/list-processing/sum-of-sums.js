"use strict";

/*
P
  i: single array of numbers
  o: single number

E
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36

D
array

A
function sumOfSums takes single array as arg
- reduce the input array to sum of sums
  - start with the first element of the array to get the first sum
  - on each successive loop, sum all the elements up/including the curr element
    - then add the previous sums to the most recent sum
  - until you produce a sum including the last element
C
*/

function sumOfSums(input) {
  const arraySum = (array) => array.reduce((sum, curr) => sum + curr);
  return input.reduce((sum, _, i, input) => sum + arraySum(input.slice(0, i + 1)));
}




console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35