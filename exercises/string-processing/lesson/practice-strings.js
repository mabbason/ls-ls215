"use strict";

let [ firstName, lastName ] = [ 'Miles', 'Abbason' ];

let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// console.log(firstName.concat(lastName));

// console.log(fullName.split(' '));

let language = 'JavaScript';
let idx = language.indexOf('S');
// console.log(idx);

let charCode = language.charCodeAt(idx);
// console.log(charCode);

// console.log(String.fromCharCode(83));

// console.log(language.lastIndexOf('a'));

let [ a, b ] = [ 'a', 'b' ];
// console.log(a > b);
b = 'B';
// console.log(a > b);

let [ aIndex, vIndex ] = [ language.indexOf('a'), language.indexOf('v') ];
// console.log(language.substr(aIndex, 4));
// console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));