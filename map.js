// Test/Assertion Functions

// const eqArrays = function(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
  
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }

//   return true;
// };

// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   let result = (eqArrays(arrayOne, arrayTwo) ? `✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}.` : `❌❌❌ Assertion Failed: ${arrayOne} !== ${arrayTwo}.`);
//   console.log(result);
// };

// Map function

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// Test cases

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't',]);

// const nums = [22, -2, 84, 0, 9];
// assertArraysEqual(map(nums, x => x * 3), [66, -6, 252, 0, 27]);

// const objs = [
//   {name: 'Katy', age: 26},
//   {name: 'Ed', age: 14},
//   {name: 'Jesse', age: 48},
// ];
// assertArraysEqual(map(objs, x => x.name), ['Katy', 'Ed', 'Jesse']);

// map(objs, x => {
//   if (x.age > 18) {
//     x.canVote = true;
//   } else {
//     x.canVote = false;
//   }
// });
// assertArraysEqual(map(objs, x => x.canVote), [true, false, true]);