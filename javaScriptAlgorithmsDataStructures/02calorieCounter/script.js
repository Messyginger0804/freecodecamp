// Step 20
// Declare a cleanStrArray variable and assign it an empty array. You will use this to store your valid number characters.

const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
    const strArray = str.split('');
    const cleanStrArray = [];
}