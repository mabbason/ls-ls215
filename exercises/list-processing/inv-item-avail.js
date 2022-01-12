"use strict";

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, dataList) {
  return dataList.filter( transaction => transaction.id === id );
}

function isItemAvailable(id, transList) {
  let qty = transactionsFor(id, transList).reduce((qty, curr) => {
    if (curr.movement === 'in') return qty + curr.quantity;
    if (curr.movement === 'out') return qty - curr.quantity;
  }, 0);
  return qty > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true