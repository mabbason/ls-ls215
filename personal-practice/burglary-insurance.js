/*
The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, 
but they detected further irregularities; the list of stolen items is misformatted and appears to 
contain other entries that don't belong there. Find and remove them.

You receive an object with nested objects with strings as values. Convert their values to numbers 
and return an object without the entries that evaluate to NaN.

If the input is not valid or there are no valid entries, return null.

Examples

{
  bedroom: {
    slippers: "10000",
    piano: "550",
    call: "vet",
    travel: "world",
  },
} 

--> {
      bedroom: {
          slippers: 10000,
          piano: 5500,
        },
    }
  
 findAndRemove({
    kitchen: {
      ["gold spoons"]: "900",
      piano: "0",
      notes: "ga0r76ba22g4e",
    },
    cellar: {
      reminder: "dog",
      bottle: "750",
    },
  }) 
  
--> {
    kitchen: {
      ["gold spoons"]: 900,
      piano: 0,
    },
    cellar: {
      bottle: 750,
    },
  }

Data Structures:
 Object
 
Algorithm
 - write find function findAndRemove() takes a single object as arg
  - iterate through properties of the input object
    - assign each prop to the return from reformatObject
  - return obj
      
  - reformatObject helper function take single obj as arg
    - iterating through the object's properties
      - convert them to a number
    - iterate again remove any properties whose value NaN
    - return obj
    
 Code
*/

function findAndRemove(obj) {
  if (!isValidObject(obj)) return null;
  for (let prop in obj) {
    obj[prop] = reformatObject(obj[prop]);
  }
  if (Object.keys(obj).length === 0) return null;
  return obj;
};

function reformatObject(obj) {
  for (let prop in obj) {
    obj[prop] = Number(obj[prop]);
  }
  
  return cleanNaNValues(obj)
};

function cleanNaNValues(obj) {
  for (let prop in obj) {
    if (Number.isNaN(obj[prop])) {
      delete obj[prop];
    }
  }
  return obj
};

function isValidObject(val) {
  if (val === null || typeof val !== 'object') return false;
  return val.constructor.name === 'Object';
};

console.log(findAndRemove({
    kitchen: {
      ["gold spoons"]: "900",
      piano: "0",
      notes: "ga0r76ba22g4e",
    },
    cellar: {
      reminder: "dog",
      bottle: "750",
    },
  }));

console.log(findAndRemove({
  bedroom: {
    slippers: "10000",
    piano: "550",
    call: "vet",
    travel: "world",
  },
} ));

console.log(findAndRemove({})); // null
console.log(findAndRemove(null)); // null