"use strict";

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(bands) {
  return bands.map(band => {
    return {
      name: processName(band.name),
      country: 'Canada',
      active: band.active
    };
  });
}

function processName(name) {
  return name.split(' ').map(word => {
    let newWord = word.replace(/\./g, '');
    return newWord[0].toUpperCase() + newWord.slice(1);                
  }).join(' ');
}

console.log(processBands(bands));