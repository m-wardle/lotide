const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
 
  it("returns an object with letter counts for 'hello'", () => {
    assert.deepEqual(countLetters('hello'), {h: 1, e: 1, l: 2, o: 1});
  });
});