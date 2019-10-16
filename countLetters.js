// Test/Assertion Functions

const assertEqual = function(actual, expected) {
  let result = (actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}.` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);
  console.log(result);
};

// countLetters Function

const countLetters = function(string) {
  const result = {};
  const alphabet = { // Initially I just excluded spaces, as the instructions only mentioned those, but I wanted to make sure we only counted letters and not punctuation so I did this.
    'a' : true,
    'b' : true,
    'c' : true,
    'd' : true,
    'e' : true,
    'f' : true,
    'g' : true,
    'h' : true,
    'i' : true,
    'j' : true,
    'k' : true,
    'l' : true,
    'm' : true,
    'n' : true,
    'o' : true,
    'p' : true,
    'q' : true,
    'r' : true,
    's' : true,
    't' : true,
    'u' : true,
    'v' : true,
    'w' : true,
    'x' : true,
    'y' : true,
    'z' : true
  };

  for (const letter of string.toLowerCase()) {
    if (alphabet[letter]) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }

return result;
}

// Test Cases

console.log(countLetters('Hello'))
console.log(countLetters("Hello, I'm typing out the whole alphabet unnecessarily!!"))
