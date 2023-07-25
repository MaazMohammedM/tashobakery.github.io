let burgerIcon = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Hide the menu initially
// nav.style.display = 'none';

burgerIcon.addEventListener('click', () => {
  nav.classList.toggle('show');
});