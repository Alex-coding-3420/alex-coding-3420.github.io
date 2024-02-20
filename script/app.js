'use strict';

function setupNavbar() {
  const navbarLinks = document.querySelectorAll('.navbar__link');

  // Function to close the navbar
  function closeNavbar() {
    const navbarCheckbox = document.getElementById('navbar__checkbox');
    navbarCheckbox.checked = false; // Uncheck the checkbox
  }

  // Event listener for clicks on navbar links
  navbarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeNavbar(); // Close the navbar when a link is clicked
    });
  });
}

// Call the function to set up the navbar behavior
setupNavbar();
