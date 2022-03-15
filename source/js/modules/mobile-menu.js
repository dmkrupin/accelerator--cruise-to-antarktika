const menuElement = document.querySelector('.main-nav');
const menuToggleButton = document.querySelector('.main-nav__toggle');
const menuListElement = document.querySelector('.main-nav__list');

const initMobileMenu = () => {
    menuElement.classList.remove('main-nav--nojs');
    menuToggleButton.classList.remove('main-nav__toggle--nojs');
    menuListElement.classList.remove('main-nav__list--nojs');

    menuToggleButton.addEventListener('click', function() {
        if (menuElement.classList.contains('main-nav--closed')) {
            menuElement.classList.remove('main-nav--closed');
            menuElement.classList.add('main-nav--opened');
        } else {
            menuElement.classList.add('main-nav--closed');
            menuElement.classList.remove('main-nav--opened');
        }
      });
};

export { initMobileMenu };