"use strict";

/*
P:
  i: string word
  o: boolean
  r:
  - returns false if
    - the word uses any letter or letter-block more than once
    - case insensitive
  Here is spec'd word blocks
  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M

E:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

D: array and string

A:
write function isBlockWord, takes single word string as arg
  - make each spelling block an element in a reference array
  - iterate through the input word string, for loop to allow for early return
    - on each loop check if reference arr contains spelling block which includes current char
      - maybe indexOf??? 
        - regex to see if curr char is inlcuded in each element checked, case insensitive
    - if index is -1
      - return false
    - else use the index val
      - delete the spelling block from the reference array, continue loop
  return true

C
*/

function isBlockWord(word) {
  let spellingBlocks = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A',
    'G:T',   'R:E',   'F:S',   'J:W',   'H:U',
    'V:I',   'L:Y',   'Z:M' ];

  for (let i = 0; i < word.length; i += 1) {
    let char = word[i];
    let regex = new RegExp(char, 'i');
    let blockIdx = spellingBlocks.findIndex(block => regex.test(block));
    if (blockIdx === -1) return false;
    spellingBlocks.splice(blockIdx, 1);
  }
  return true;
};

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true