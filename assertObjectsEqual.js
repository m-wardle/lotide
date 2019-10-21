const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

// Assert Objects Equal Function

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  let result = (eqObjects(obj1, obj2) ? `✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}.` : `❌❌❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}.`);
  console.log(result);
};

module.exports = assertObjectsEqual;