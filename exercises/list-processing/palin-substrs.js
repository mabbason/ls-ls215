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

function palindromes(str) {
  return substrings(str).filter(sub => isPalindrome(sub))
}

function isPalindrome(str) {
  if (str.length === 1) return false;
  str = str.split('');
  let strRev = [...str].reverse();
  return str.every((char, i) => char === strRev[i])
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]