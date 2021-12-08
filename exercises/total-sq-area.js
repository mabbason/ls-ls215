"use strict";
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(arr) {
  return arr.reduce((area, currRec) => {
    return  area + (currRec[0] * currRec[1]);
  }, 0);
}

function totalSquareArea(arr) {
  return arr.filter(rec => rec[0] === rec[1])
            .reduce((area, currRec) => {
              return  area + (currRec[0] * currRec[1]);
            }, 0);
}

console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));    // 121 