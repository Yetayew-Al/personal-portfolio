// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeSwitch.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I\'ll respond soon.');
    this.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Animation (simple)
const typingElement = document.querySelector('.typing');
const text = typingElement.textContent;
typingElement.textContent = '';
let i = 0;
function typeWriter() {
    if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

// Parallax Effect (basic)
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-background');
    heroBg.style.transform = `translateY(${window.scrollY * 0.5}px)`;
});