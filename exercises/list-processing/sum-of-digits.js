"use strict";

/*Write a function that takes one argument, a positive integer, 
and returns the sum of its digits. Do this without using for, 
while, or do...while loops - instead, use a series of method 
calls to perform the sum.
*/



/*
P
  i: single integer
  o: single integer (sum of input parts)

E
23 --> 2 + 3 = 5
496 --> 4 + 9 + 6 = 19

D
array

A
write function `sum` takes single integer as argument
  break the input int into an array
    - each element represents a single digit of the input
  reduce the array to a sum of all the elements
  return that sum

C
*/

function sum(int) {
  let allDigits = String(int).split('').map(str => Number(str));
  return allDigits.reduce((sum, curr) => sum + curr);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45