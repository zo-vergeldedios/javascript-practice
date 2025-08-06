console.log("Expense Tracker");
const expenseName = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

addExpenseBtn.addEventListener("click", addExpense);

let total = 0;

function addExpense() {
  const expenseInput = expenseName.value.trim();

  //adding warning if there is no input on the expense name
  if (expenseInput === "") {
    warning.textContent = "Please input expense";
    return;
  } else {
    warning.textContent = "";
  }
  //used to create a new list for the expense name
  const expense = document.createElement("li");
  //used to total the expense amount
  const expenseAmount = Number(expenseAmountInput.value);
  if (!isNaN(expenseAmount) && expenseAmount > 0) {
    total += expenseAmount;
    totalAmount.textContent = total;
  } else {
    alert("Please enter a valid amount for expense.");
  }

  expense.textContent = `${expenseInput} $${expenseAmount.toFixed(2)}`;
  expense.classList.add("expense");

  expense.addEventListener("click", function () {
    expense.classList.remove("expense");
  });

  // const count = expenseList.getElementsByTagName("li").length + 1;

  expenseList.appendChild(expense);
  expenseName.value = "";

  expense.addEventListener("dblclick", function () {
    expenseList.removeChild(expense);
  });
}
