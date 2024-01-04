'use strict';
const displayId = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let currentOperator = null;

// Functions

const clearDisplay = () => {
  displayId.textContent = 0;
  currentOperand = '';
  previousOperand = '';
  currentOperator = null;
};

const updateDisplay = () => {
  displayId.textContent = currentOperand;
};

const appendNumber = (num) => {
  currentOperand += num;
  updateDisplay();
};

const appendDecimal = () => {
  if (currentOperand.includes('.')) {
    return;
  }
  currentOperand += '.';
  updateDisplay();
};

const appendPercentage = () => {
  console.log(currentOperand);
  if (currentOperand.includes('.') || currentOperand == '') {
    return;
  }
  currentOperand = '0.' + currentOperand;
  updateDisplay();
};

const appendSign = () => {
  if (currentOperand === '') {
    return;
  }
  currentOperand = currentOperand.includes('-')
    ? currentOperand.slice(1)
    : '-' + currentOperand;
  updateDisplay();
};

const chooseOperator = (operator) => {
  if (currentOperator !== null) {
    return;
  }
  if (previousOperand !== '') {
    compute();
  }
  currentOperator = operator;
  previousOperand = currentOperand;
  currentOperand = '';
};

const compute = () => {
  let computation;
  let prev = parseFloat(previousOperand);

  let cur = parseFloat(currentOperand);
  console.log(cur);
  switch (currentOperator) {
    case '+':
      computation = prev + cur;
      break;
    case '-':
      computation = prev - cur;
      break;
    case '*':
      computation = prev * cur;
      break;
    case '/':
      computation = prev / cur;
      break;
    default:
      return;
  }
  currentOperand = computation;
  previousOperand = '';
  currentOperator = null;
  updateDisplay();
};

// Click events
document.addEventListener('click', (e) => {
  console.log(e.target);
  // Operands and operators
  if (e.target.matches('.operand')) {
    appendNumber(e.target.value);
  } else if (e.target.matches('.operator')) {
    chooseOperator(e.target.value);
    // AC, sign, and percentage
  } else if (e.target.matches('.clear')) {
    clearDisplay();
  } else if (e.target.matches('.sign')) {
    appendSign();
  } else if (e.target.matches('.percent')) {
    appendPercentage();
    // decimal
  } else if (e.target.matches('.decimal')) {
    appendDecimal();
  } else if (e.target.matches('.equals')) {
    compute();
  }
  console.log(currentOperand);
});

document.addEventListener('keydown', (e) => {
  const key = e.key;
  console.log(e.key);
  if (key >= '0' && key <= '9') {
    appendNumber(key);
  } else if (key == '+' || key == '/' || key == '*' || key == '-') {
    chooseOperator(key);
  } else if (key == '=' || key == 'Enter') {
    compute();
  } else if (key == 'Backspace') {
    clearDisplay();
  } else if (key == '.') {
    appendDecimal();
  } else if (key == '%') {
    appendPercentage();
  }
});
