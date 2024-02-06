'use strict';
const date = new Date();

// Form
const dayId = document.getElementById('day');
const monthId = document.getElementById('month');
const yearId = document.getElementById('year');
const btnId = document.getElementById('btn');

// Display elements
const yearsDisplay = document.getElementById('yearsDisplay');
const monthsDisplay = document.getElementById('monthsDisplay');
const daysDisplay = document.getElementById('daysDisplay');

const ageCalculator = (event) => {
  event.preventDefault();

  const birthDate = new Date(
    Number(yearId.value),
    Number(monthId.value) - 1,
    Number(dayId.value)
  );
  const currentDate = new Date();

  let yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
  let monthsDiff = currentDate.getMonth() - birthDate.getMonth();
  let daysDiff = currentDate.getDate() - birthDate.getDate();

  if (daysDiff < 0) {
    monthsDiff--;
    daysDiff += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff += 12;
  }

  yearsDisplay.textContent = yearsDiff;
  monthsDisplay.textContent = monthsDiff;
  daysDisplay.textContent = daysDiff;
};

btnId.addEventListener('click', ageCalculator);
