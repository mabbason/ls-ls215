function testValid(val) {
  if (!isValidInput(val)) throw new Error('Invalid Input');

  console.log('Input is Valid');
};

function isValidInput(val) {
  return isValidObject(val) || isValidArray(val); 
};

function isValidObject(val) {
  if (val === null || typeof val !== 'object') return false;  
  if (val.constructor.name !== 'Object') return false;  
  if (Object.keys(val).length === 0) return false;
  return true;
};

function isValidArray(val) {
  if (!Array.isArray(val)) return false;
  let arrKeys = Object.keys(val);
  return arrKeys.length === val.length;
};



let sparseArr = [1,,3,,4];
let normalArr = [1, 2, 3, 4];
let badInput = 'bad';
let emptyObj = {};
let normalObj = {test: 'this'};

console.log(testValid(normalObj));