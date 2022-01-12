"use strict";

function staggeredCase(str) {
  let ltrCase = 'upper';

  return str.split('')
            .map(char => {
              if (/[a-z]/i.test(char)) {
                char = ltrCase === "upper" ? char.toUpperCase() : char.toLowerCase();
                ltrCase = ltrCase === "upper" ? "lower" : "upper";
              }
              return char;
            })
            .join('');
};

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"