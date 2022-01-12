"use strict";

/*
P
  i: phone number, various formats
  o: cleaned up phone number
  r: 
    - if digits are less than 10, bad number
    - if 10 digits, good number
    - if 11 digits
      - first number is 1, good number, use last 10 digits
      - if first number is not 1, bad number
    - if more than 11 digits, bad number
    - if bad number, return '0000000000'

E
cleanNumber('123-1234'); // '0000000000'
cleanNumber('1-800-123-1234'); // '8001231234'
cleanNumber('1-800-123-12345'); // '0000000000'
cleanNumber('2-800-123-1234'); // '0000000000'
cleanNumber('800-123-1234'); // '8001231234'
cleanNumber('800.123.1234'); // '8001231234'
cleanNumber('(800) 123-1234'); // '8001231234'
cleanNumber('1 (800) 123-1234'); // '8001231234'
cleanNumber('+1 (800) 123-1234'); // '8001231234'
cleanNumber('+12 (800) 123-1234'); // '0000000000'

D
  strings

A
write function cleanNumber() takes single string as arg
- declare var clean and init to the input string cleaned of anything but numbers
  - split the string, then filter for numbers only
- call helper function isBadNumber, pass in number string
- if isBadNumber return '0000000000' else return clean number

helper function isBadNumber, takes single string numStr arg
  - if length is 10 return false
  - if length is less than 10 or greater than 11
    - return true
  - if length is 11 check the first digit
    - if it's a 1 return false
    - else return true

C
*/

function cleanNumber(strNum) {
  let cleanNum = strNum.replace(/[^0-9]/g, '');

  return isBadNumber(cleanNum) ? '0000000000' : cleanNum.slice(-10);
};

function isBadNumber(strNum) {
  if (strNum.length === 10) return false;
  if (strNum.length < 10 || strNum.length > 11) return true;
  return strNum[0] !== '1';
};


console.log(cleanNumber('123-1234')); // '0000000000'
console.log(cleanNumber('1-800-123-1234')); // '8001231234'
console.log(cleanNumber('1-800-123-12345')); // '0000000000'
console.log(cleanNumber('2-800-123-1234')); // '0000000000'
console.log(cleanNumber('800-123-1234')); // '8001231234'
console.log(cleanNumber('800.123.1234')); // '8001231234'
console.log(cleanNumber('(800) 123-1234')); // '8001231234'
console.log(cleanNumber('1 (800) 123-1234')); // '8001231234'
console.log(cleanNumber('+1 (800) 123-1234')); // '8001231234'
console.log(cleanNumber('+12 (800) 123-1234')); // '0000000000'