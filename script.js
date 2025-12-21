// ==============================
// MOBILE NAV TOGGLE
// ==============================
const toggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

if (toggle) {
    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==============================
// DARK / LIGHT MODE TOGGLE
// ==============================
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
if (themeIcon) updateIcon(savedTheme);

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });
}

function updateIcon(theme) {
    if (!themeIcon) return;
    themeIcon.classList.toggle('fa-sun', theme === 'dark');
    themeIcon.classList.toggle('fa-moon', theme === 'light');
}

// ==============================
// SMOOTH UPWARD PAGE TRANSITION (ALWAYS)
// ==============================
const sections = document.querySelectorAll('.section');

// Initial hidden state
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(60px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

// Reveal on scroll (ALWAYS)
function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < triggerBottom) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(60px)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
