// ==========================================
// SpendWise JavaScript Foundation (Week 6)
// ==========================================

// 2. Store Application Data / Variables
const appName = "SpendWise Budget Tracker";
console.log(`Initializing ${appName}...`);

// 3. Collect User Input via prompts and parse to numbers
let totalBudget = parseFloat(prompt("Enter your total monthly budget ($):", "1000"));
let foodExpense = parseFloat(prompt("Enter your Food & Dining expense ($):", "250"));
let transportExpense = parseFloat(prompt("Enter your Transport expense ($):", "100"));
let utilitiesExpense = parseFloat(prompt("Enter your Utilities expense ($):", "150"));

// Fallback validation if input is canceled or invalid
if (isNaN(totalBudget)) totalBudget = 0;
if (isNaN(foodExpense)) foodExpense = 0;
if (isNaN(transportExpense)) transportExpense = 0;
if (isNaN(utilitiesExpense)) utilitiesExpense = 0;

// 5. Create Reusable Functions for Calculations
function calculateTotalExpenses(food, transport, utilities) {
  return food + transport + utilities;
}

function calculateRemainingBalance(budget, totalExpenses) {
  return budget - totalExpenses;
}

// 4. Perform Budget Calculations using the functions
let totalExpenses = calculateTotalExpenses(foodExpense, transportExpense, utilitiesExpense);
let remainingBalance = calculateRemainingBalance(totalBudget, totalExpenses);

// 6. Display Results clearly labeled in the browser console
console.log("========================================");
console.log("       SPENDWISE FINANCIAL SUMMARY      ");
console.log("========================================");
console.log(`Total Monthly Budget:  $${totalBudget.toFixed(2)}`);
console.log("----------------------------------------");
console.log(`Food & Dining Expense: $${foodExpense.toFixed(2)}`);
console.log(`Transport Expense:     $${transportExpense.toFixed(2)}`);
console.log(`Utilities Expense:     $${utilitiesExpense.toFixed(2)}`);
console.log("----------------------------------------");
console.log(`Total Expenses:        $${totalExpenses.toFixed(2)}`);
console.log(`Remaining Balance:     $${remainingBalance.toFixed(2)}`);
console.log("========================================");

// Extra feedback based on remaining balance
if (remainingBalance < 0) {
  console.warn("⚠️ Warning: You have exceeded your budget!");
} else {
  console.log("✅ Great job! You are staying within your budget limits.");
}