'use strict';

const container = document.querySelector('.pixel-container');
const colorPicker = document.querySelector('#color-picker');
const gridSize = document.querySelector('#grid-size');

let isDragging = false;

function createGrid(num) {
  container.innerHTML = '';
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement('div');
    div.style.width = `${100 / num}%`;
    div.style.border = `1px solid #999`;
    div.classList.add('pixel');
    container.appendChild(div);
  }
}

container.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('pixel')) {
    if (!isDragging) {
      isDragging = true;
      e.target.style.backgroundColor = colorPicker.value;
      console.log(e.type);
    } else {
      isDragging = false;
    }
  }
});

container.addEventListener('mousemove', (e) => {
  if (isDragging && e.target.classList.contains('pixel')) {
    e.target.style.backgroundColor = colorPicker.value;
  }
});

gridSize.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (gridSize.value < 1 || gridSize.value > 100) {
      alert('Please choose a value between 1 and 100');
      return;
    }
    createGrid(gridSize.value);
    gridSize.value = '';
  }
});
