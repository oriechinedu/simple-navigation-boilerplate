const navItems = document.querySelector('.nav-items');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  navItems.classList.toggle('open');
})