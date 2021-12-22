"use strict";

function swapCase(str) {
  return str.replace(/[a-z]/ig, (x) => /[a-z]/.test(x) 
    ? x.toUpperCase() : x.toLowerCase());
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"