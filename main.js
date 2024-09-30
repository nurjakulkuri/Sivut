
// Hae hampurilaisnappi, pudotusvalikko ja overlay-elementti
const nav_hamburger = document.getElementById('nav-hamburger');
const nav_dropdown = document.getElementById('nav-dropdown');
const nav_overlay = document.getElementById('overlay');

// Lisää klikkitapahtuman kuuntelija hampurilaisnapille
nav_hamburger.addEventListener('click', (event) => {
    
    // Estä muiden tapahtumien käsittely tämän klikkauksen jälkeen
    event.stopImmediatePropagation();

    // Vaihda .active-luokan tila hampurilaisnapissa, pudotusvalikossa ja overlayssa
    nav_hamburger.classList.toggle('active');
    nav_dropdown.classList.toggle('active');
    nav_overlay.classList.toggle('active');
});

// Lisää klikkitapahtuman kuuntelija overlay-elementille
nav_overlay.addEventListener('click', () => {
    
    // Poista .active-luokka hampurilaisnapista ja pudotusvalikosta, jolloin ne suljetaan
    nav_hamburger.classList.remove('active');
    nav_dropdown.classList.remove('active');
});

// Lisää klikkitapahtuman kuuntelija koko dokumentille
document.addEventListener('click', (event) => {
    
    // Tarkista, ettei klikkaus tapahtunut hampurilaisnapissa tai pudotusvalikossa
    if (!nav_hamburger.contains(event.target) && !nav_dropdown.contains(event.target)) {
        
        // Poista .active-luokka kaikista elementeistä (hampurilaisnappi, pudotusvalikko ja overlay)
        nav_hamburger.classList.remove('active');
        nav_dropdown.classList.remove('active');
        nav_overlay.classList.remove('active');
    }
});
