const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      blackComedy: "The Sopranos",
      italianAmericanCulture: "The Sopranos"
    };

  it("returns 'drama' when passed the value 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns 'undefined' when passed the value 'That '70s Show'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns 'blackComedy' when passed the value 'The Sopranos'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Sopranos"), "blackComedy");
  });
  
});