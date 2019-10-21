const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns an empty array if array only contains one item", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array if input contains only two items", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});