
function calculateTotal(expenses) {
  return expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
}

function filterByCategory(expenses, category) {
  return expenses.filter(
    (expense) => expense.category === category
  );
}

module.exports = {
  calculateTotal,
  filterByCategory,
};
