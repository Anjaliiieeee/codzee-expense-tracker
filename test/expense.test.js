
const test = require("node:test");
const assert = require("node:assert/strict");

const {
  calculateTotal,
  filterByCategory,
} = require("../expense");

test("calculates the total of valid expenses", () => {
  assert.equal(
    calculateTotal([
      { amount: 100, category: "Food" },
      { amount: 50, category: "Travel" },
    ]),
    150
  );
});

test("filters categories ignoring case and spaces", () => {
  assert.deepEqual(
    filterByCategory(
      [
        { amount: 100, category: " Food " },
        { amount: 50, category: "Travel" },
      ],
      "food"
    ),
    [{ amount: 100, category: " Food " }]
  );
});

test("rejects null expense records when filtering", () => {
  assert.throws(
    () => filterByCategory([null], "Food"),
    TypeError
  );
});

test("rejects array expense records when filtering", () => {
  assert.throws(
    () => filterByCategory([[]], "Food"),
    TypeError
  );
});

test("rejects expenses with a missing category", () => {
  assert.throws(
    () => filterByCategory([{ amount: 100 }], "Food"),
    TypeError
  );
});

test("rejects a non-string category filter", () => {
  assert.throws(
    () => filterByCategory([{ amount: 100, category: "Food" }], 123),
    TypeError
  );
});
