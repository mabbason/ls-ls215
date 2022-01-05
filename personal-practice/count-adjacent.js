/* 
You know how sometimes you write the the same word twice in a sentence, but then don't notice 
that it happened? For example, you've been distracted for a second. Did you notice that "the" 
is doubled in the first sentence of this description?

As as you can see, it's not easy to spot those errors, especially if words differ in case, 
like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). 
The occurence of two or more equal words next after each other counts as one. 
For invalid inputs the count should be 0

console.log(countAdjacentPairs('orange Orange kiwi pineapple apple') === 1); // 1
console.log(countAdjacentPairs('banana banana banana') === 1); // 1
console.log(countAdjacentPairs("banana's banana's pie pie!") === 2); // 2
 */
//potential solution

function countAdjacentPairs(str) {
  if (typeof str !== 'string' || str === '') return 0;
  let count = 0;
  let wordsArr = str.match(/[a-zA-Z']+/g).map(word => word.toLowerCase());
  let currDuplicate = null;
  
  wordsArr.reduce((last, curr) => {
    if (curr === last && curr !== currDuplicate) {
      count += 1;
      currDuplicate = curr;
    }
    return curr;
  });
  return count;
};



console.log(countAdjacentPairs('orange Orange kiwi pineapple apple') === 1); // 1
console.log(countAdjacentPairs('banana banana banana') === 1); // 1
console.log(countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!') === 2); // 2

console.log(countAdjacentPairs("banana's banana's pie pie!") === 2); // 2
console.log(countAdjacentPairs('pineapple apple') === 0); // 0
console.log(countAdjacentPairs(222) === 0); // 0
console.log(countAdjacentPairs('') === 0); // 0
console.log(countAdjacentPairs({}) === 0); // 0