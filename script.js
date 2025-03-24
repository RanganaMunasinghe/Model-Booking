// Hamburger Menu Functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeButton = document.querySelector('.close-button');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.add('open');
});

closeButton.addEventListener('click', () => {
    mobileNav.classList.remove('open');
});


// Model Image Hover Effect (Optional - Add more dynamically if needed)
const modelItems = document.querySelectorAll('.model-item');

modelItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.model-name').style.opacity = 1;
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('.model-name').style.opacity = 0;
    });
});