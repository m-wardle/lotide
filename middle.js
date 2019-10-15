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

// Middle-Finding Function

const middle = function(array) {
  let middleArray = [];
  let midPoint = array.length / 2;
  
  if (array.length < 3) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    middleArray.push(array[midPoint - 1], array[midPoint]);
    return middleArray;
  } else {
    middleArray.push(array[Math.floor(midPoint)]);
    return middleArray;
  }
};

// Test Cases

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
