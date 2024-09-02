// Get all the elements
const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const equalsButton = document.getElementById('equals');
const zeroButton = document.getElementById('zero');
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');

// Function to update the display
function updateDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to backspace the display
function backspaceDisplay() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

// Add event listeners to the buttons
clearButton.addEventListener('click', clearDisplay);
backspaceButton.addEventListener('click', backspaceDisplay);
divideButton.addEventListener('click', () => updateDisplay('/'));
multiplyButton.addEventListener('click', () => updateDisplay('*'));
subtractButton.addEventListener('click', () => updateDisplay('-'));
addButton.addEventListener('click', () => updateDisplay('+'));
equalsButton.addEventListener('click', calculateResult);
zeroButton.addEventListener('click', () => updateDisplay('0'));
oneButton.addEventListener('click', () => updateDisplay('1'));
twoButton.addEventListener('click', () => updateDisplay('2'));
threeButton.addEventListener('click', () => updateDisplay('3'));
fourButton.addEventListener('click', () => updateDisplay('4'));
fiveButton.addEventListener('click', () => updateDisplay('5'));
sixButton.addEventListener('click', () => updateDisplay('6'));
sevenButton.addEventListener('click', () => updateDisplay('7'));
eightButton.addEventListener('click', () => updateDisplay('8'));
nineButton.addEventListener('click', () => updateDisplay('9'));