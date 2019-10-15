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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let result = (eqArrays(arrayOne, arrayTwo) ? `✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}.` : `❌❌❌ Assertion Failed: ${arrayOne} !== ${arrayTwo}.`);
  console.log(result);
};

// Flatten Function

const flatten = function(array) {
  for (let i = 0; i < array.length;) {
    if (Array.isArray(array[i]) === true) {
      let counter = 0;
      for (let element of array[i]) {
        array.splice(i + counter, 0, element);
        counter++;
      }
      array.splice(i + counter, 1);
      i += counter;
    } else {
      i++;
    }
  }

  return array;
};

// Test Cases

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([22, -1, [-24, 44, 891], [23, -111], 3]), [22, -1, -24, 44, 891, 23, -111, 3]);
assertArraysEqual(flatten(['test', ['hello', 'test2'], 2, 4, [24, 42]]), ['test', 'hello', 'test2', 2, 4, 24, 42]);