// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}.` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);
  console.log(result);
};

const head = function(array) {
  return array[0];
};

// TEST CASES

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([]));