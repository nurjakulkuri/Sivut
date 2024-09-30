const nav_hamburger = document.getElementById('nav-hamburger');
const nav_dropdown = document.getElementById('nav-dropdown');
const nav_overlay = document.getElementById('overlay');

nav_hamburger.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    nav_hamburger.classList.toggle('active');
    nav_dropdown.classList.toggle('active');
    nav_overlay.classList.toggle('active');
});

nav_overlay.addEventListener('click', () => {
    nav_hamburger.classList.remove('active');
    nav_dropdown.classList.remove('active');
});

document.addEventListener('click', (event) => {
    if (!nav_hamburger.contains(event.target) && !nav_dropdown.contains(event.target)) {
        nav_hamburger.classList.remove('active');
        nav_dropdown.classList.remove('active');
        nav_overlay.classList.remove('active');
    }
});