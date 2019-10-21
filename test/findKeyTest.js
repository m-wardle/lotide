const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey", () => {
 
  it("returns 'noma' when looking for a stars value of 2", () => {
    assert.deepEqual(findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2), "noma");
  });

  it("returns 'Akaleri' when looking for a stars value that is divisible by 3", () => {
    assert.deepEqual(findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => !(x.stars % 3)), "Akaleri");
  });

  it("returns 'Akelarre' when looking for a stars value that is greater than 5", () => {
    assert.deepEqual(findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 5 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 9 }
      }, x => x.stars > 5), "Akelarre");
  });
});