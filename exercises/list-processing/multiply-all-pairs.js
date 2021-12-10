"use strict";
/*
P
  i: two arrays w number vals
  o: single array containing products
      of all possible combinations
  r: 
  - neither array is empty
E
array 1 [2, 4]
array 2 [4, 3, 1, 2]

multiply each number in array 1 by each number in array 2

D
arrays

A
function multiplyAllPairs takes two arrays as args: arr1 and arr2
- init new empty result array to be returned from the function
- iterate through array arr1
  - for each number multiply by each element in arr2
  - push the resulting product into the result array
- sort the result array in ascending order (smaller to larger)
- return the sorted result array

C

*/

function multiplyAllPairs(arr1, arr2) {
  let products = [];

  arr1.forEach(num1 => arr2.forEach(num2 => products.push(num1 * num2)));

  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]