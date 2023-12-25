const navbar = document.getElementById('navbar');
const main = document.getElementById('main');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
  const navbarBottom = navbar.getBoundingClientRect().bottom;
  const mainTop = main.getBoundingClientRect().top;

  if (navbarBottom <= mainTop) {
    navbar.classList.remove('small-navbar');
    logo.src = './assets/img/logo.svg';
  } else {
    navbar.classList.add('small-navbar');
    logo.src = './assets/img/logo-outline.svg';
  }
});
