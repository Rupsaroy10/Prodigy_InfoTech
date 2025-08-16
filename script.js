/*===========================toggle icon navber===================*/
let manuIcon = document.querySelector('#manu-icon');
let navbar = document.querySelector('.navbar');

manuIcon.onclick = () => {
    manuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===========================scroll sec active link ===================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*===========================sticky navber ===================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100)

    /*===============remove toggle icon navbar when click navbar link scroll===========*/
    manuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*===========================scroll revaeal ===================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form,' , {
    origin:
    'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.skills-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.skills-content h2, .heading', { origin: 'left' });
ScrollReveal().reveal('.services-box, .heading', { origin: 'bottom' });
ScrollReveal().reveal('.project-box, .heading', { origin: 'bottom' });




/*=========================== typrd js ===================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Frontend Developer', 'Backend Developer'],
    typeSpreed: 80,
    backspreed: 100,
    backDelay: 1000,
    loop: true
});

/*end */