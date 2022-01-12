/*
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), 
and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".

Treat any input as valid which "looks" correct. If there is an invalid input, return null

Examples
generation(2, "f") // "granddaughter"

generation(-3, "M") // "great grandfather"

generation('-1', "f") // "mother"

generation(99, "f") // "great great great great... granddaughter"

*/
//potential solution

function generation(x, y) {
  y = y.toLowerCase();
  x = Number(x);
  
  if (!isValidInput(x, y)) return 'Invalid Input';
  if (x === 0) return 'me!';
  
  const ref = {
    '-2': {m: 'grandfather', f: 'grandmother'},
    '-1': {m: 'father', f: 'mother'},
    '1': {m: 'son', f: 'daughter'},
    '2': {m: 'grandson', f: 'granddaughter'},
  };
  
  let count = Math.abs(x) - 2;
  let greatPrepend = 'great '.repeat(count >= 0 ? count: 0);
  
  if (Math.abs(x) > 2) {
    return x > 0 ? greatPrepend + ref['2'][y]: greatPrepend + ref['-2'][y];
  }
  
  return greatPrepend + ref[x][y];
};

function isValidInput(x, y) {
  if (y !== 'm' && y !== 'f') return false;
  if (x !== x || !Number.isInteger(x)) return false;
  return true;
};


console.log(generation(-3, "M") === "great grandfather");
console.log(generation(1, "f") === "daughter");
console.log(generation('-3', "f") === "great grandmother");
console.log(generation(-2, "m") === "grandfather");
console.log(generation(-2, "f") === "grandmother");
console.log(generation(-1, "M") === "father");
console.log(generation('-1', "f") === "mother");
console.log(generation(0, "f") === "me!");
console.log(generation('1', "m") === "son");
console.log(generation(1, "F") === "daughter");
console.log(generation('2', "m") === "grandson");
console.log(generation(2, "f") === "granddaughter");
console.log(generation(3, "m") === "great grandson");
console.log(generation(3, "F") === "great granddaughter");
console.log(generation(6, "f") === "great great great great granddaughter");
console.log(generation('-6', "m") === "great great great great grandfather");
console.log(generation('0', "m") === "me!");
console.log(generation('a', "f") === 'Invalid Input');
console.log(generation(1, "n") === 'Invalid Input');
console.log(generation('-3', "w") === 'Invalid Input');
console.log(generation(Infinity, "m") === 'Invalid Input');
