const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {

  it("returns [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [22, -1, -24, 44, 891, 23, -111, 3] when passed [22, -1, [-24, 44, 891], [23, -111], 3]]", () => {
    assert.deepEqual(flatten([22, -1, [-24, 44, 891], [23, -111], 3]), [22, -1, -24, 44, 891, 23, -111, 3]);
  });
  
  it("returns ['test', 'hello', 'test2', 2, 4, 24, 42] when passed ['test', ['hello', 'test2'], 2, 4, [24, 42]]", () => {
    assert.deepEqual(flatten(['test', ['hello', 'test2'], 2, 4, [24, 42]]), ['test', 'hello', 'test2', 2, 4, 24, 42]);
  });
});