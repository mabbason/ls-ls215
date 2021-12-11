"use strict";
const readline = require('readline-sync');

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

// console.log(language.substring(aIndex, 4));
// console.log(language.substring(vIndex, 4));

let [ fact1, fact2 ] = ['Javascript is fun', 'Kids like it too' ];
let compoundSentence = fact1.concat(' and ', fact2.toLowerCase());
// console.log(compoundSentence);

// console.log(fact1[0], fact2[0]);

let pi = (22 / 7);
// console.log(pi.toString().lastIndexOf('14'));

let boxNumber = (356).toString();
// console.log(boxNumber);

// boxNumber = parseInt(boxNumber, 10);
// console.log(typeof boxNumber);
// boxNumber = String(boxNumber);
// console.log(typeof boxNumber);

let name = readline.question('What is your name? ');

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`)
}