"use strict";

function leadingSubstrings(str) {
  let subs = [];

  for (let len = 1; len <= str.length; len += 1) {
    subs.push(str.substring(0, len));
  }

  return subs;
}

function substrings(str) {
  let allSubs = [];

  for (let i = 0; i <= str.length; i += 1) {
    let curr = str.substring(i)
    allSubs.push(...leadingSubstrings(curr));
  }

  return allSubs;
}

console.log(substrings('abcde'));