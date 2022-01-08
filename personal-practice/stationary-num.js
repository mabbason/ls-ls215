/*"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

(10 ^ 0) % 13 ->  1
(10 ^ 1) % 13 -> 10
(10 ^ 2) % 13 ->  9
(10 ^ 3) % 13 -> 12
(10 ^ 4) % 13 ->  3
(10 ^ 5) % 13 ->  4
--------------------> starting here the pattern begins repeating
(10 ^ 6) % 13 ->  1
(10 ^ 7) % 13 ->  10
(10 ^ 8) % 13 ->  9
(10 ^ 9)....

Then the whole pattern repeats again, and again...

Using the specified "sequence" from mod13 (% 13), that is 1, 10, 9, 12, 3, 4. 
Find and return the stationary number. 

The stationary number is found by utilizing the follow method.

Multiply the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

Example:
What is the stationary number of 1234567?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)
Therefore following the method we get:

7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with the number 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).

Call thirt() the function which processes this sequence of operations on an integer n (>=0). 
thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48

console.log(thirt(939897969594939291)); // 75
console.log(thirt(1234567)); // 87
console.log(thirt(321)); // 48
*/

/*
8 - 7 - 1
1 - 10 - 9
8   70  9 -> 87

7 - 8
1 - 10
7 - 80 -> 87

i: int >= 0
o: stationary number

r: 
  - use my 10^powers numbers w mod13
    - apply the sequence
      - take n number and reverse
      - multiply each digit by the 10powers digits
      - sum the resulting digits to get the stationary number
    - repeat unless the stationary number equals the last stationary number
    
examples:
8 - 7 - 1
1 - 10 - 9
8   70  9 -> 87

7 - 8
1 - 10
7 - 80 -> 87

data structure:
arrays

Algorithm
write function thirt() takes single n int as arg
- declare the reference mod13Sequence and init to helper function
  - getSequence helper takes the n int as arg
    - returns the sequence
- declare stationaryNumsArr and init to empty array
- declare currStationary and init to value of getStationary num
  - access helper function getStationaryNum() takes n int and sequence
- loop while stationaryNumsArr does NOT include currStationary
  - call getStationaryNum to generate currStationary and push to the array
- return the last element of stationaryNumsArr

- getSequence helper, takes n int as arg
  (returns sequence as array)
  - declare refMod13Sequence and init to [1, 10,  9, 12, 3,  4]
  - declare sequence as empty array
  - while the length of the sequence array is shorter than the number of digits in n
    - starting w index 0, push the digits in refMod13Seuence to sequence
  - return sequence

- getStationaryNum(n, sequence)
  - convert n to string, then split to array, then reverse
  - transform each digit in nRevArr by multiplying each digit by the same idx digit in         sequence array 
  - the return the sum of the multipled elements as the stationary number
  

CODE
*/
//Potential Solution
function thirt(n) {
  let sequence = getSequence(n);
  let stationaryNumsArr = [];
  let currStationary = getStationaryNum(n, sequence);
  
  while (!stationaryNumsArr.includes(currStationary)) {
    stationaryNumsArr.push(currStationary);
    currStationary = getStationaryNum(currStationary, sequence);
  }
  
  return currStationary;
};

function getSequence(n) {
  const refMod13Sequence = [1, 10,  9, 12, 3,  4];
  let sequence = [];
  let idx = 0;
  
  while (sequence.length < String(n).length) {
    sequence.push(refMod13Sequence[idx])
    if (idx === (refMod13Sequence.length - 1)) {
      idx = 0
    } else {
      idx += 1;
    }
  };
  
  return sequence;
};

function getStationaryNum(n, seq) {
  let nRevArr = String(n).split('').reverse();
  let stationaryNum = nRevArr.map((digit, idx) => Number(digit) * seq[idx])
                             .reduce((sum, cv) => sum + cv);
  return stationaryNum;
};

console.log(thirt(939897969594939291)); // 75
console.log(thirt(1234567)); // 87
console.log(thirt(321)); // 48