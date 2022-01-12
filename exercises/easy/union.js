"use strict";
/*
input: two arrays
output: single array

rules:
  - assume both args ALWAYS arrays
  - combine the values from two arrays into one array
  - there should be no duplicate values in the output array

Example
  [1, 3, 5] + [3, 6, 9]  -->  [1, 3, 5, 6, 9]
    the number 3 was removed as it was a duplicate value
    
Data Structure
  Arrays
  
Algorithm
 Write function union that takes two arrays as args
 - guard clause isValidInput, if false return null
 - declare unionArr as empty array to hold non-duplicate values
 - concatenate the two input arrays
 - remove duplicates
  - iterate over the concatenated array
    - if unionArr does NOT include the currVal
      - then push to unionArr
    - else continue iteration
 - return resulting array

  Helper: isValidInput takes the same first two arguments from union, arr1, arr2
  - test whether the number of keys are the same as the arr length
    - for each input
  - return false if the keys:lengths don't match

*/

function union(arr1, arr2) {
  if (!isValidInput(arr1, arr2)) return null;
  
  let unionArr = []
  arr1.concat(arr2).forEach(val => {
    if (!unionArr.includes(val)) {
      unionArr.push(val);
    }
  });
  
  return unionArr;
};

function isValidInput(arr1, arr2) {
  if (arr1.length !== Object.keys(arr1).length) return false
  if (arr2.length !== Object.keys(arr2).length) return false
  return true;
}

// // Happy Path
// console.log(union([1, 2, 3],[4, 6])) // [1, 2, 3, 4, 6]

// // Duplicate values over two separate inputs
// console.log(union([1, 2, 3],[2, 4, 6])) // [1, 2, 3, 4, 6]

// // Duplicate values within each single input
// console.log(union([1, 1, 1],[2, 2, 3, 4, 6])) // [1, 2, 3, 4, 6]

// // Sparse Array
// console.log(union([1, 2, 3],[2, , 3, 4, 6])) // null

// // Single Empty Array
// console.log(union([],[1, 2, 3, 4, 6])) // [1, 2, 3, 4, 6]

// // Two Empty Arrays
// console.log(union([],[])) // []

// Extra Arrays passed in
console.log(union([1, 2, 3],[4, 6], [1, 2, 7])) // [1, 2, 3, 4, 6]

// Extra Arrays passed in, extra array is sparse 
console.log(union([1, 2, 3],[4, 6], [1, , 7])) // [1, 2, 3, 4, 6]