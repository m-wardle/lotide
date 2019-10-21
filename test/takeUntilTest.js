const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {
 
  it("returns the first 5 numbers before it hits a negative number", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  
  it("returns the first strings before it hits a comma", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });

  it("returns the first 4 numbers before it hits a number divisible by two", () => {
    const data3 = [1, 3, 9, 7, 6, 11, 24, 3];
    const results3 = takeUntil(data3, x => !(x % 2));
    assert.deepEqual(results3, [1, 3, 9, 7]);
  });

});