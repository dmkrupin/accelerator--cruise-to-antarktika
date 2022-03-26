const menuElement = document.querySelector('.main-nav');
const menuToggleButton = document.querySelector('.main-nav__toggle');

const initMobileMenu = () => {
  if (menuElement) {
    menuElement.classList.remove('main-nav--nojs');
    menuToggleButton.classList.remove('main-nav__toggle--nojs');

    const anchors = document.querySelectorAll('.main-nav__link');

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (evt) {
        evt.preventDefault();
        const sectionID = anchor.getAttribute('href').substr(1);

        setTimeout(() => {
          document.getElementById(sectionID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }, 400);

      })
    }

  }
};

export { initMobileMenu };
