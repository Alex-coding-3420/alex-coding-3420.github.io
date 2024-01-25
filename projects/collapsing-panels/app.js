const panels = document.querySelectorAll('.panel');

let activePanel = null;

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // Remove 'active' class from the previously active panel
    if (activePanel) {
      activePanel.classList.remove('active');
    }

    // Toggle 'active' class on the clicked panel
    panel.classList.toggle('active');
    activePanel = panel; // Update the active panel
  });
});
