"use strict";

function anagram(word, list) {
  return list.filter(wordFromList => areAnagrams(wordFromList, word));
}

function areAnagrams(word1, word2) {
  if (word1.length !== word2.length) return false;

  let word1Arr = word1.split('').sort();
  let word2Arr = word2.split('').sort();

  return word1Arr.every((letter, idx) => letter === word2Arr[idx]);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));