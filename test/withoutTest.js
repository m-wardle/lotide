const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
 
  it("returns [1, 2, 4, 7] when passed [1, 2, 3, 4, 5, 6, 7, 8], [3, 5, 6, 8] ", () => {
    assert.deepEqual(without([1, 2, 3, 4, 5, 6, 7, 8], [3, 5, 6, 8]), [1, 2, 4, 7]);
  });
  
  it("returns [2, 3] when passed [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] when passed ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("doesn't modify the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(["hello", "world", "lighthouse"], ["lighthouse"]); 
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});