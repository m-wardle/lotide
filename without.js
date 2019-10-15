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

// Without Function

const without = function(array, exclusions) {
  let newArray = array;
  
  for (let x = 0; x < exclusions.length; x++) {
    for (let y = 0; y < newArray.length;) {
      if (exclusions[x] === newArray[y]) {
        newArray.splice(y, 1);
      } else {
        y++;
      }
    }
  }

  return newArray;
};

// Test Cases

assertArraysEqual(without([1, 2, 3, 4, 5, 6, 7, 8], [3, 5, 6, 8]), [1, 2, 4, 7]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2",]);

// Test to make sure original array is not modified

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);