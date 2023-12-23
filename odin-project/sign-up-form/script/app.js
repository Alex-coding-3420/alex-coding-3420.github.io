'use strict';

const inputs = document.querySelectorAll('.input');

// Event listener for when the input
inputs.forEach((input) => {
  // When the input is focused, label will translateY with a transition
  // through the 'active' class
  input.addEventListener('focus', () => {
    const label = input.previousElementSibling;
    label.classList.add('active');
  });

  // When the input is no longer in focus, if the input is empty,
  // then 'active' will be removed
  input.addEventListener('blur', () => {
    const label = input.previousElementSibling;
    if (input.value === '') {
      label.classList.remove('active');
    }
  });
});
