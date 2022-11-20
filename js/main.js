
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

// Skill tabs show/hide 

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i< skillsContent.length; i++)
    {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close')
    {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((e) => {
    e.addEventListener('click', toggleSkills)
})

// Qualifications

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

// Portfolio(Swiper) 

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   Scroll active link 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Header shadow on scroll 

function scrollHeaderShadow(){
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) 
        nav.classList.add('header-shadow');
    else
        nav.classList.remove('header-shadow');
}
window.addEventListener('scroll',scrollHeaderShadow)

// Dark mode 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const homeImg = document.getElementById('home-img')
const contactImg = document.getElementById('contact-img')

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getcurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getcurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getcurrentTheme())
    localStorage.setItem('selected-icon',getcurrentIcon())

    if(getcurrentTheme() === 'dark')
    {
        homeImg.src="assets/img/home-dark.svg";
        contactImg.src="assets/img/contact-dark.svg"
    }
    else
    {
        homeImg.src="assets/img/home.svg"
        contactImg.src="assets/img/contact.svg"
    }

})

// Fade on scroll 

// let elementsArray = document.querySelectorAll(".section__title");
// console.log(elementsArray);
// window.addEventListener('scroll', fadeIn ); 
// function fadeIn() {
//     for (var i = 0; i < elementsArray.length; i++) {
//         var elem = elementsArray[i]
//         var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
//         if (distInView < 0) {
//             elem.classList.add("inView");
//         } else {
//             elem.classList.remove("inView");
//         }
//     }
// }
// fadeIn();

// Auto type title 

var typed = new Typed(".auto-type",{
    strings: ["Undergraduate","Software Engineer"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true
})

// Form-SMTP Mail 

function sendEmail(){

    inputName = document.getElementById("contact__input-name").value;
    inputEmail = document.getElementById("contact__input-email").value;
    inputMsg = document.getElementById("contact__input-msg").value;

    if (inputName === "" || inputEmail === "" || inputMsg === "") {
    }
    else
    {
        console.log(inputName);
        Email.send({ 
            SecureToken: "f8686d97-8b2d-45b7-95e0-f02334b06aec",
            To: "gimantha.contact@gmail.com",
            From: "gimantha.me@outlook.com",
            Subject: "Portfolio site - Contact Enquiry",
            Body: "Name: " + inputName + "<br><br> Email: " + inputEmail + "<br><br> Message: " + inputMsg 
        }).then(message => alert("Message Sent Successfully"));
    }
}
