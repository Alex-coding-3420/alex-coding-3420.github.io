'use strict';
const displayId = document.getElementById('display');
const calculatorId = document.getElementById('calculator');
let currentOperand = '';
let previousOperand = '';
let currentOperator = null;

// Number btns
const operandBtns = document.querySelectorAll('.operand');
// Operator btns
const operatorBtns = document.querySelectorAll('.operator');
// AC btn
const clearBtn = document.querySelector('.clear');
// +/- btn
const signBtn = document.querySelector('.sign');
// % btn
const percentBtn = document.querySelector('.percent');
// Decimal btn
const decimalBtn = document.querySelector('.decimal');
// Equals btn
const equalBtn = document.querySelector('.equals');

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
  console.log(prev);
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
calculatorId.addEventListener('click', (e) => {
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
});
