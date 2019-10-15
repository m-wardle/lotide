const assertEqual = function(actual, expected) {
  let result = (actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}.` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);
  console.log(result);
};

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
// Test Cases

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, '3'], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, '2', '3']), false); 
assertEqual(eqArrays([4, -27, 333], [4, -27, 333]), true);