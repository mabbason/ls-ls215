"use strict";

function isBalanced(str) {
  let openingBracket = [];

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if (char === ')') {
      if (!openingBracket.pop()) return false
    } else if (char === '(') {
      openingBracket.push(char);
    }
  }

  if (openingBracket.length > 0) return false;
  return true;
}


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false