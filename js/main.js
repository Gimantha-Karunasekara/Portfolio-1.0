const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// SHOW/Toggle NavBar
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Close nav
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Hide nav items when selected
const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(n => n.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}))