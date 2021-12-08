"use strict";

function octalToDecimal(numberString) {
  let decimalParts = numberString.split('').map((digitChar, idx) => {
    return (digitChar * (8 **(numberString.length - 1 - idx)));
  });

  return decimalParts.reduce((sum, cv) => sum + cv);
}

console.log(octalToDecimal('1'));        // 1
console.log(octalToDecimal('10'));        // 8
console.log(octalToDecimal('130'));        // 88
console.log(octalToDecimal('17'));        // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));        // 9