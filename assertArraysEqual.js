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
}

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let result = (eqArrays(arrayOne, arrayTwo) ? `✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}.` : `❌❌❌ Assertion Failed: ${arrayOne} !== ${arrayTwo}.`);
  console.log(result);
}

//Test Cases

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, '3'], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4])
assertArraysEqual([1, 2, 3], [1, '2', '3'])
assertArraysEqual([4, -27, 333], [4, -27, 333])