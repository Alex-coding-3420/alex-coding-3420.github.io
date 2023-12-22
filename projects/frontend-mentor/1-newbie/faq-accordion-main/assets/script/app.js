'use strict';
// paths to the plus and minus images
const minusImg = './assets/images/icon-minus.svg';
const plusImg = './assets/images/icon-plus.svg';

const accordion = document.querySelectorAll('.accordion');
accordion.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    // Get the sibling element next to accordion
    const panel = accordion.nextElementSibling;
    // Find the icon within accordion
    const icon = accordion.querySelector('.icon');
    // toggle .active on the panel
    panel.classList.toggle('active');

    // If max-height is already set:
    if (panel.style.maxHeight) {
      // remove the 'max-height' property already set
      panel.style.maxHeight = null;
    } else {
      // else, set the maxHeight to the scroll height of the panel to expand it
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }

    // If the panel contains '.active'
    if (panel.classList.contains('active')) {
      // change the src attribute to the 'minus' img path
      icon.src = minusImg;
    } else {
      // else, change the src attribute to the 'plus' img path
      icon.src = plusImg;
    }
  });
});
