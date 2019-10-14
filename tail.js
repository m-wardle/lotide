// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}.` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);
  console.log(result);
};

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i <= array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

// TEST CASES

assertEqual(tail([5,6,7]).join(''), [6, 7].join(''));
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).join(''), ["Lighthouse", "Labs"].join(''));
console.log(tail([]));

// Checking the original array

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);