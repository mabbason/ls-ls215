// Given two arrays smarr and bigarr, we say smlst is an ordered subarray of bigarr if all the elements of smarr can be found in bigarr, and in the same order.

// Examples:

// [4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1]. // 4 appears before 3, 3 appears before 2
// [5, 3, 1] is an ordered subarray of [5, 4, 3, 2, 1]. // numbers in between do not matter if they don't match
// [5, 3, 1] is not an ordered subarray of [1, 2, 3, 4, 5] since elements are not in the same order -
// [1, 2, 3] is an ordered subarray of [3, 2, 1, 2, 3]. //
// Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.

// Be careful of examples like the fourth example, where the elements of smarr appear multiple times in bigarr.

// // small appears in big, happy path
// console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1])); // ➞ true

// // small appears in big, numbers in between (order preserved)
// console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1])); // ➞ true

// // small appears in big, OUT OF ORDER
// console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5])); // ➞ false

// // small appears in big, BUT order is important (must encounter small in correct order too!
// console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3])); // ➞ true

// // small appears in big, BUT order is important (must encounter small in correct order too! Look at the 4 vs previous
// console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 4])); // ➞ false

// // negative numbers
// console.log(isOrdSub([-2, 1, 3], [3, 2, -2, 2, 1, 2, 3])); // --> true

console.log(isOrdSub([-1, -0, 0, 1], [-1, 0, -0, 1])); 



/*
i: two arrays, one small (ordered) one large
  - each contain ONLY numbers
o: boolean
  - true
    - small sub-arr is found in larger, in order as well
  - false
    - small sub-arr is NOT found, or is NOT in order
Examples
  see above

Data Structure
  array
  
Algorithm
  write function isOrdSub, takes two arr as args
    - declare sml arr idx init to 0
    - declare variable search init to smlArr index 0
    - iterate through the bigArr
      - if find search value
        - then assign search var to next index of smlArr
          - increment searchIdx
        - if that next idx is undefined
          - return true
    - return false

*/

function isOrdSub(smlArr, bigArr) {
  if (smlArr.length === 0 && bigArr.length === 0) return true;
  let smlArrIdx = 0;
  let search = smlArr[smlArrIdx];
  
  for (let idx = 0; idx < bigArr.length; idx += 1) {
    if (bigArr[idx] === search && 
        Math.sign(bigArr[idx]) === Math.sign(search)) {
      smlArrIdx += 1;
      search = smlArr[smlArrIdx];
      if (search === undefined) return true
    }
  }

  return false;
};

function isOrdSub(small, big) {
  for (let idx = 0; idx < small.length; idx++) {
    let idxOfSubInBig = big.indexOf(small[idx]);
    if (idxOfSubInBig === -1) {
      return false;
    } else {
      big = big.slice(idxOfSubInBig + 1);
    }
  }
  return true;
}