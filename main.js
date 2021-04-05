
// One approach is to store our two numbers and one operation as strings so that 
// we can easily add characters as the user presses buttons
let firstNumber = ''
let operation = '';
let secondNumber = '';

// Calculates the result of the current expression if it is valid, then displays the result on the screen
function calcResult() {
  // TODO
}

// Handles when an operation button is pressed (+, -, /, *)
function operationPressed(number) {
  // TODO
}

// Handles when a number button is pressed
function numberPressed() {
  // TODO
const numValue = number.innerText ;
firstNumber += numValue;
console.log (firstNumber)
}



// Clears the screen
function clearScreen(key) {
  // TODO
 firstNumber = firstNumber.split ();
  firstNumber= [];
}

// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  // TODO
}

// TODO: write query selectors and add event listeners to the calculator's buttons
const numbers = document.querySelectorAll (".num")
for (number of numbers){
    number.addEventListener ('click',numberPressed)
}

const equalSign = document.querySelector ( "#equal-sign")
equalSign.addEventListener ("click", clearScreen)