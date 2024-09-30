const nav_hamburger = document.getElementById('nav-hamburger');
const nav_dropdown = document.getElementById('nav-dropdown');

nav_hamburger.addEventListener('click', () => {
    nav_hamburger.classList.toggle('active');
    nav_dropdown.classList.toggle('active');
});