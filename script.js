document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.textContent = 'Menu';
    document.querySelector('.main-nav').prepend(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('.main-nav ul').classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
});

// Page load handler
document.addEventListener('DOMContentLoaded', function() {
// Show content after everything loads
window.addEventListener('load', function() {
document.body.classList.add('loaded');

// Additional component-specific animations
const components = document.querySelectorAll('section, header, nav, footer');
components.forEach((comp, index) => {
    comp.style.animationDelay = `${0.1 * index}s`;
});
});
});

// Image loader
document.querySelectorAll('img').forEach(img => {
if(img.complete) {
img.classList.add('loaded');
} else {
img.addEventListener('load', () => {
    img.classList.add('loaded');
});
}
});

document.querySelector('.contact-form').addEventListener('submit', function() {
    this.querySelector('.submit-btn').textContent = 'Sending...';
});