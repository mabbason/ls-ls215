"use strict";

/*
P:

E:
1111 becomes 2121
- then get the checksum by adding together:  2+1+2+1 = 6
- if the last digit in the resulting sum if 0
  - then the number is valid
  - if it's not (like here, bc it is 6), then the number is NOT valid


8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)

D:
 strings and arrays

A:
write function isValidNumber takes single number string arg
- clean the string from anything other than numbers
- split the string into an array
- reverse the array
- map the array to new digits
  - even index return number as number value
  - double the number and if it's greater than 9
    - subtract 9 and return the result
    - otherwise return the doubled number
- reduce the array to a sum
return if last digit is equal to 0

C
*/

function isValidNumber(strNum) {
  let cleanNum = strNum.replace(/[^0-9]/g, '');
  let checkSum = cleanNum.split('')
                         .reverse()
                         .map((char, idx) => {
                            if (idx % 2 === 0) return Number(char);
                            let doubled = Number(char) * 2;
                            return doubled > 9 ? doubled - 9 : doubled;
                         })
                         .reduce((sum, cv) => sum + cv)
                         .toString();
  
  return checkSum.slice(-1) === '0';                        
};



console.log(isValidNumber('1111')); // false
console.log(isValidNumber('87 63')); // true
console.log(isValidNumber('8-7-6-3')); // true
console.log(isValidNumber('2323 2005 7766 3554')); // true
