const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

  it("returns 1 instance of Jason with provided firstNames", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined for Karima with provided firstNames", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns 2 instances of Fang with provided firstNames", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
});