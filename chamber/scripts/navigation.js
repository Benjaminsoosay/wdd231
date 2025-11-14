// Responsive Navigation
const hamburgerBtn = document.getElementById('hamburgerBtn');
const primaryNav = document.getElementById('primaryNav');

hamburgerBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('active');
    hamburgerBtn.textContent = primaryNav.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#primaryNav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            primaryNav.classList.remove('active');
            hamburgerBtn.textContent = '☰';
        }
    });
});

// Wayfinding - Set active navigation based on current page
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#primaryNav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
}

// Initialize navigation
document.addEventListener('DOMContentLoaded', setActiveNav);