const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {

  it("returns h: [0] when passed 'h ello'", () => {
    assert.deepEqual(letterPositions("h ello").h, [0]);
  });

  it("returns e: [1] when passed 'he llo'", () => {
    assert.deepEqual(letterPositions("he llo").e, [1]);
  });

  it("returns l: [2, 3] when passed 'hell o'", () => {
    assert.deepEqual(letterPositions("hell o").l, [2, 3]);
  });

  it("returns o: [4] when passed 'hello '", () => {
    assert.deepEqual(letterPositions("hello ").o, [4]);
  });
});