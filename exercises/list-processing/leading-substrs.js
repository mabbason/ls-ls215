"use strict";

// function leadingSubstrings(str) {
//   let subs = [];

//   for (let i = 1; i <= str.length; i += 1) {
//     subs.push(str.substring(0, i));
//   }

//   return subs;
// }

function leadingSubstrings(str) {
  let subs = [];
  str.split('').reduce((str, curr) => {
    str += curr;
    subs.push(str);
    return str;
  }, '');
  return subs;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]