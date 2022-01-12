"use strict";

/*
P
  i: two version numbers, misc formats 
  o: 1, -1, or 0
  r:
    - if v1 > v2 return 1
    - if v1 < v2 return -1 
    - if v1 = v2 return 0

E
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

D
 strings and arrays

A
  write function compareVersions takes two args, version 1 and version 2
  - guard clause if v1 = v2 return 0 : helper function??
    - strip zeroes from the end of each version to check
  
  - convert each version to an array (matching w regex?)
    - while the arrays are different lengths add a zero to the short version
    - helper function??

  - iterate by index (for loop?)
    - check each version number and against the other on each iteration
      - if v1 > v2 return 1
      - if v1 < v2 return -1 

  helper function stripZeroes takes single version number as arg
    while the version number ends with '.0'
    - replace '.0' with '', or slice the string excluding the last two
    return the resulting string

  helper isValidVersionNum takes single version number as arg
    return boolean from regex test on arg
      - need regex that passes the following pattern
        - first digit is a number of any length
        - followed by zero or more of pattern:
          - single point followed by a number of any length

C
*/

function compareVersions(v1, v2) {
  if (!isValidVersionNum(v1) || !isValidVersionNum(v2)) return null;
  if (stripZeroes(v1) === stripZeroes(v2)) return 0;
  
  [ v1, v2 ] = [ v1.match(/[0-9]+/g), v2.match(/[0-9]+/g) ];

  while (v1.length !== v2.length) {
    if (v1.length < v2.length) {
      v1.push('0');
    } else {
      v2.push('0');
    }
  }

  for (let i = 0; i < v1.length; i += 1) {
    if (v1[i] !== v2[i]) {
      return v1[i] < v2[i] ? -1: 1;
    }
  }
}

function stripZeroes(vNum) {
  while (vNum.endsWith('.0')) {
    vNum = vNum.slice(0, vNum.length - 2);
  }
  return vNum;
}

function isValidVersionNum(vNum) {
  return vNum.match(/[0-9]+(\.[0-9]+)*/)[0] === vNum;
}


console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1