// Test/Assertion Functions

const assertEqual = function(actual, expected) {
  let result = (actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}.` : `❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);
  console.log(result);
};

// Find Key Funtion

const findKey = function(obj, callback) {
  for (key in obj) {
    if (callback(obj[key]) === true) {
      return key;
    }
  }
}

// Test Cases

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => !(x.stars % 3)), "Akaleri");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 5 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 9 }
}, x => x.stars > 5), "Akelarre");