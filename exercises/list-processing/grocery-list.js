"use strict";

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(list) {
  let items = [];

  list.forEach(item => {
    for (let rpt = item[1]; rpt > 0; rpt -= 1) {
      items.push(item[0]);
    }
  });

  return items;
}