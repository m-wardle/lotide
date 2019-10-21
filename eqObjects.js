// Assertion/Test Functions

const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

// Object Equality Assertion Function

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

module.exports = eqObjects;