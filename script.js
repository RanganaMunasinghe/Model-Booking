// Enhanced Hamburger Menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeButton = document.querySelector('.close-button');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.add('open');
    hamburgerMenu.classList.add('active'); // For icon animation
});

closeButton.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburgerMenu.classList.remove('active');
});

// Enhanced Model Hover
const modelItems = document.querySelectorAll('.model-item');

modelItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const name = item.querySelector('.model-name');
        name.style.opacity = '1';
        name.style.transform = 'translateY(0)';
    });

    item.addEventListener('mouseleave', () => {
        const name = item.querySelector('.model-name');
        name.style.opacity = '0';
        name.style.transform = 'translateY(100%)';
    });
});