const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    // Scroll back to the top for '#'
    if (href === '#') {
      e.preventDefault(); // Prevent default behavior for '#' links
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Scroll to selection for other internal links
    if (href.startsWith('#')) {
      e.preventDefault(); // Prevent default behavior for internal links
      const sectionEl = document.querySelector(href);
      if (sectionEl) {
        sectionEl.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
    // For external links, allow default behavior (navigate to other pages)
  });
});
