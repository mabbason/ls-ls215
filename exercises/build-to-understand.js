"use strict";
//forEach

function myForEach(array, func) {
  let maxIndex = array.length - 1;
  for (let idx = 0; idx <= maxIndex; idx += 1) {
    func(array[idx], idx, array);
  }
}

//filter

function myFilter(array, func) {
  let filtered = [];
  let maxIndex = array.length - 1;

  for (let idx = 0; idx <= maxIndex; idx += 1) {
    if (func(array[idx])) filtered.push(array[idx]);
  }
  return filtered;
}

//map

function myMap(array, func) {
  let transformed = [];
  array.forEach((value) => {
    transformed.push(func(value));
  });
  return transformed;
}

//reduce



//every

function myOwnEvery(array, func) {
  let result = true;

  array.forEach(value => {
    if (!func(value)) result = false;
  })
  return result;
}

//sort
