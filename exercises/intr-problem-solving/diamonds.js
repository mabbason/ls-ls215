"use strict";

/*
P
  i:
  o:
  r:
    - assume always int supplied as arg

E
1 -> *

3 -> *
    ***
    
9 -> * 4 spaces, *, 4 spaces = 9 total length 
    *** 3 spaces, ***, 3 spaces = 9 total length
   ***** 2 spaces, *****, 2 spaces = 9 total, etc. they all are 9
  ******* 1 space, *******, 1 space
 ********* all spaces are *
  *******
   *****
    ***
     *
D - strings???

A
write function diamond takes a single positive int as only arg (n)
  - declare str arr to hold strings to log
  - declare length init to 1
  - while loop until length = n
    - build string with spaces and *'s
      - spaces = (n - length) / 2
      - *'s = length
      string = spaces + *'s
    - push string to array
    - increment length + 2
  - while loop until length < 1
    - build string with spaces and *'s
    - decrement length - 2
      - build string with spaces and *'s
      - spaces = (n - length) / 2
      - *'s = length
      string = spaces + *'s
    - push string to array
  - iterate through array and log each string
    
C
*/

function diamond(n) {
  let stars = [];
  let length = 1;
  
  do {
    let totalLength = length + ((n - length) / 2);
    let string = '*'.repeat(length).padStart(totalLength);
    stars.push(string);
    length += 2;
  } while (length <= n);

  length -= 2;
  
  while (length > 1) {
    length -= 2;
    let totalLength = length + ((n - length) / 2);
    let string = '*'.repeat(length).padStart(totalLength);
    stars.push(string);
  };

  stars.forEach(line => console.log(line));
}

diamond(1);
diamond(3);
diamond(9);