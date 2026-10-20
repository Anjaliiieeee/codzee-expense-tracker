
const test = require("node:test");
const assert = require("node:assert/strict");

const {
  calculateTotal,
  filterByCategory,
} = require("../expense");

test("calculates total expenses correctly", () => {
  assert.equal(
    calculateTotal([
      { amount: 100, category: "Food" },
      { amount: 50, category: "Travel" },
    ]),
    150
  );
});

test("returns zero for an empty expense list", () => {
  assert.equal(calculateTotal([]), 0);
});

test("rejects invalid expense amounts", () => {
  assert.throws(
    () => calculateTotal([{ amount: "invalid" }]),
    TypeError
  );
});

test("filters categories regardless of case or extra spaces", () => {
  assert.deepEqual(
    filterByCategory([
      { amount: 100, category: " Food " },
      { amount: 50, category: "Travel" },
    ], "food"),
    [{ amount: 100, category: " Food " }]
  );
});

test("rejects a non-array expense list when filtering", () => {
  assert.throws(
    () => filterByCategory(null, "Food"),
    TypeError
  );
});
