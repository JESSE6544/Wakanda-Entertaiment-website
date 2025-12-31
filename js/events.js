// events.js - Modern JavaScript for Events Page

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade in to sections
document.querySelectorAll('.section, .event-card, .column').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Booking form submission
document.querySelector('.booking-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your booking request! We\'ll get back to you soon.');
    this.reset();
});

// Add hover effects to buttons
document.querySelectorAll('.btn, .btn-small').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Mobile menu toggle
const navToggle = document.createElement('button');
navToggle.textContent = '☰';
navToggle.style.display = 'none';
navToggle.style.background = 'none';
navToggle.style.border = 'none';
navToggle.style.color = '#000000';
navToggle.style.fontSize = '1.5rem';
navToggle.style.cursor = 'pointer';

document.querySelector('nav').appendChild(navToggle);

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = '#FFDAB9';
        navLinks.style.padding = '1rem';
    }
}

navToggle.addEventListener('click', toggleMenu);

// Show toggle button on mobile
if (window.innerWidth <= 768) {
    navToggle.style.display = 'block';
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block';
        document.querySelector('.nav-links').style.display = 'none';
    } else {
        navToggle.style.display = 'none';
        document.querySelector('.nav-links').style.display = 'flex';
        document.querySelector('.nav-links').style.flexDirection = 'row';
        document.querySelector('.nav-links').style.position = 'static';
    }
});

// Hide/Show navigation on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down - hide header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show header
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});