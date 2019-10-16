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

// Letter Position Function

const letterPositions = function(sentence) {
  const results = {};
  for (const letter in sentence) {
    if (sentence[letter] !== ' ') {
      if (results[sentence[letter]]) {
        results[sentence[letter]].push(Number(letter));
      } else {
        results[sentence[letter]] = [Number(letter)];
      }
    }
  }
  console.log(results)
  return results;
};

// Test Cases

assertArraysEqual(letterPositions("h ello").h, [0]);
assertArraysEqual(letterPositions("he llo").e, [1]);
assertArraysEqual(letterPositions("hell o").l, [2, 3]);
assertArraysEqual(letterPositions("hello  ").o, [4]);