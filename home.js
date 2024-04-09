const display = document.getElementById("display");
let currentDisplay = "0";
let operator = null;

function appendNumber(number) {
  if (currentDisplay === "0") {
    currentDisplay = number.toString();
  } else {
    currentDisplay += number.toString();
  }
  updateDisplay();
}

function setOperator(op) {
  if (operator !== null || currentDisplay === "0") {
    calculateResult();
  }
  operator = op;
}

function calculateResult() {
  try {
    const result = eval(currentDisplay);
    currentDisplay = result.toString();
    operator = null;
  } catch (error) {
    currentDisplay = "Error";
  }
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = "0";
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  display.value = currentDisplay;
}