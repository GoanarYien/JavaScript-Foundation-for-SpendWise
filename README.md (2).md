# SpendWise - JavaScript Foundation

## Project Overview
SpendWise is a personal finance dashboard web application designed to help users track budgets and expenses. This week's milestone introduces JavaScript to transform the application from a purely static visual design into a dynamic tool capable of processing financial data.

## JavaScript Concepts Implemented
- **Variables & Data Types:** Used `const` for static app metadata and `let` for dynamic budget and expense values. Numbers and strings are utilized to manage calculations and text outputs.
- **User Input Collection:** Utilized browser `prompt()` dialogs to dynamically gather user financial input (budget and category expenses) upon page load.
- **Mathematical Calculations:** Performed core financial calculations, adding individual expenses together and subtracting them from the total budget to calculate the remaining balance.
- **Reusable Functions:** Created dedicated functions (`calculateTotalExpenses` and `calculateRemainingBalance`) to modularize and organize application logic cleanly.
- **Console Output:** Formatted and clearly labeled results are displayed directly in the browser's Developer Tools Console.

## How to Test Your Application
1. Open your `index.html` file in any web browser.
2. A series of input prompts will appear asking for your budget and expense values.
3. Right-click anywhere on the page, select **Inspect**, and open the **Console** tab to view your formatted financial summary.