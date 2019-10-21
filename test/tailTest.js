const assert = require('chai').assert;
const tail =  require('../tail');

describe("#tail", () => {
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });

  it("returns an empty array if array only contains one item", () => {
    assert.deepEqual(tail(['test']), []);
  });

  it("returns an empty array if input is an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("does not affect the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });
});