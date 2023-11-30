const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);
allLinks.forEach(function (link) {
  // For each 'a link'
  link.addEventListener('click', function (e) {
    // disable default behavior
    e.preventDefault();
    // retrieve href attribute from anchor
    const href = link.getAttribute('href');
    // Scroll back to the top
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Scroll to selection
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
