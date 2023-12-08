'use strict';

const displayId = document.querySelector('#display');
let displayStr = '0';
const clearBtn = document.querySelector('.clear');
console.log(clearBtn);

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divde = (x, y) => (y === 0 ? undefined : x / y);
const operate = (x, y, operator) => operator(x, y);
