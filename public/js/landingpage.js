// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// GSAP Animation for the logo
gsap.from('.logo', {
    opacity: 0,
    duration: 1,
    delay: 2,
    y: 10
});

// GSAP Animation for navbar items with staggering effect
gsap.from('.navbar .nav-items', {
    opacity: 0,
    duration: 1,
    delay: 2.1,
    y: 30,
    stagger: 0.2 // Adds a stagger effect for each nav-item
});

gsap.from('.search-container', {
    opacity: 0,
    duration: 1,
    delay: 2.1,
    y: 30,
});

// GSAP Animation for the title
gsap.from('.title', {
    opacity: 0,
    duration: 1,
    delay: 1.6,
    y: 30
});

// GSAP Animation for the description
gsap.from('.description', {
    opacity: 0,
    duration: 1,
    delay: 1.8,
    y: 30
});

// GSAP Animation for the button
gsap.from('.btn', {
    opacity: 0,
    duration: 1,
    delay: 2.1,
    y: 30
});

// GSAP Animation for the image
gsap.from('.image', {
    opacity: 0,
    duration: 1,
    delay: 2.6,
    y: 30
});

// GSAP Animation for the featured-secrets section
gsap.from('.featured-secrets', {
    opacity: 0,
    duration: 1,
    y: 30,
    scrollTrigger: {
        trigger: '.featured-secrets',
        start: 'top 90%', // Adjust as needed
        end: 'bottom top',
        scrub: true
    }
});

// GSAP Animation for the testimonials section
gsap.from('.testimonials', {
    opacity: 0,
    duration: 1,
    y: 30,
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 90%', // Adjust as needed
        end: 'bottom top',
        scrub: true
    }
});

// GSAP Animation for the about section
gsap.from('.about', {
    opacity: 0,
    duration: 1,
    y: 30,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 90%', // Adjust as needed
        end: 'bottom top',
        scrub: true
    }
});

// GSAP Animation for the contact section
gsap.from('.contact', {
    opacity: 0,
    duration: 1,
    y: 30,
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 150%', // Adjust as needed
        end: 'bottom top',
        scrub: true
    }
});

// JavaScript for toggling the navbar menu
let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu").onclick = () => {
    navbar.classList.add("active");
};

document.querySelector("#close").onclick = () => {
    navbar.classList.remove("active");
};
