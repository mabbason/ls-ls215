/*
The police call. Your house has been burglarized. They need a more detailed list of the stolen goods.

They believe they have all the correct information, but aren't sure how exactly it should be organized.

Return an object that represents which room the goods were stolen from and as well as the 
goods from each room and their respective value.

For invalid inputs, return 'Invalid Input'.

Examples
makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]])
➞ { kitchen: { piano: 1000, tv: 50 } }

makeDetailedList([
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
]) ➞ {
  basement: {
    "baseball bat": 500
  },
  garage: {
    horses : 110,
    cadillac: 2000,
    flowers: 30
  }
}

*/
//potential solution

let house1 = [["kitchen", ["piano", "tv"], [1000, 50]]];
let house2 = [
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
];

function makeDetailedList(houseArr) {
  houseArr.map(room => detailRoom(room));
  return Object.fromEntries(houseArr);
};

function detailRoom(roomArr) {
  let values = roomArr.pop();
  let pairs = roomArr[1].map((item, idx) => [item, values[idx]]);
  roomArr[1] = Object.fromEntries(pairs);
  return roomArr;
};

console.log(makeDetailedList(house1));
console.log(makeDetailedList(house2));

/*
potential function to test validity of object as input

function isValidObject(val) {
  if (val === null || typeof val !== 'object') return false;
  return val.constructor.name === 'Object';
};

*/