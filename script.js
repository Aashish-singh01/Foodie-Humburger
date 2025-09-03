const hamburgerIcon = document.querySelector('.right-header');

const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon');

hamburgerIcon.addEventListener('click', () => {
    headerContent.classList.add('menu-open');
});

closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open');
});