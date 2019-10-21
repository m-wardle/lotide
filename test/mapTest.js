const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
 
  it("returns the first letter of each word in the array", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, word => word[0]);
  assert.deepEqual(results1, ['g', 'c', 't', 'm', 't',]);
  });

  it("returns each number multiplied by 3", () => {
    const nums = [22, -2, 84, 0, 9];
    assert.deepEqual(map(nums, x => x * 3), [66, -6, 252, 0, 27]);
  });

  it("returns the name of each person object", () => {
    const objs = [
        {name: 'Katy', age: 26},
        {name: 'Ed', age: 14},
        {name: 'Jesse', age: 48},
      ];
    assert.deepEqual(map(objs, x => x.name), ['Katy', 'Ed', 'Jesse'])
  });
  
});