
function calculateTotal(expenses) {
  if (!Array.isArray(expenses)) {
    throw new TypeError("Expenses must be an array");
  }

  return expenses.reduce((total, expense) => {
    if (
      !expense ||
      typeof expense !== "object" ||
      Array.isArray(expense)
    ) {
      throw new TypeError("Each expense must be an object");
    }

    if (
      typeof expense.amount !== "number" ||
      !Number.isFinite(expense.amount) ||
      expense.amount < 0
    ) {
      throw new TypeError(
        "Each expense must have a finite, non-negative amount"
      );
    }

    return total + expense.amount;
  }, 0);
}


function filterByCategory(expenses, category) {
  if (!Array.isArray(expenses)) {
    throw new TypeError("Expenses must be an array");
  }

  if (typeof category !== "string") {
    throw new TypeError("Category must be a string");
  }

  for (const expense of expenses) {
    if (
      !expense ||
      typeof expense !== "object" ||
      Array.isArray(expense)
    ) {
      throw new TypeError("Each expense must be a valid object");
    }

    if (
      typeof expense.category !== "string"
    ) {
      throw new TypeError("Each expense must have a string category");
    }
  }

  const normalizedCategory = category.trim().toLowerCase();

  return expenses.filter(
    (expense) =>
      expense.category.trim().toLowerCase() === normalizedCategory
  );
}


module.exports = {
  calculateTotal,
  filterByCategory,
};
