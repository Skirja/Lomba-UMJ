document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            navMenu.style.right = '0';
        } else {
            navMenu.style.right = '-100%';
        }
    });
});