// Test/Assertion Functions
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length > keys2.length || keys2.length > keys1.length) {
    return false;
  } else {
    for (let key of keys1) {
      if (!obj2[key]) {
        return false;
      } else if ((Array.isArray(obj1[key]) && Array.isArray(obj2[key])) ? !eqArrays(obj1[key], obj2[key]) : obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
};

// Assert Objects Equal Function

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  let result = (eqObjects(obj1, obj2) ? `✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}.` : `❌❌❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}.`);
  console.log(result);
};

// Test Cases

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // false