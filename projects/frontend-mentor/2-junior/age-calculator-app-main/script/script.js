const date = new Date();

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve values from form inputs
  const dayValue = parseInt(document.getElementById('day').value, 10);
  const monthValue = parseInt(document.getElementById('month').value, 10);
  const yearValue = parseInt(document.getElementById('year').value, 10);

  // Get current date
  const currentDate = new Date();

  // Calculate age
  const birthDate = new Date(yearValue, monthValue - 1, dayValue); // Month is 0-based
  const ageDate = new Date(currentDate - birthDate);
  const years = Math.abs(ageDate.getUTCFullYear() - 1970);
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  // Update content of span elements
  document.querySelector('.year-item').textContent = years;
  document.querySelector('.month-item').textContent = months;
  document.querySelector('.day-item').textContent = days;
});
