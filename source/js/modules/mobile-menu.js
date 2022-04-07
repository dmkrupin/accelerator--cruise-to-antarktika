const pageHeader = document.querySelector('.page-header');
const menuElement = pageHeader.querySelector('.main-nav');
const menuToggleButton = pageHeader.querySelector('.main-nav__toggle');

const setLinkSmoothScroll = (link) => {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    const sectionID = link.getAttribute('href').substr(1);

    setTimeout(() => {
      document.getElementById(sectionID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 400);
  })
};

const initMobileMenu = () => {
  if (menuElement) {
    menuElement.classList.remove('main-nav--nojs');
    menuToggleButton.classList.remove('main-nav__toggle--nojs');

    const anchors = document.querySelectorAll('.main-nav__link');

    for (let anchor of anchors) {
      setLinkSmoothScroll(anchor);
    }
  }
};

const updateModalMenu = () => {
  const inlineNavList = pageHeader.querySelector('.main-nav__list');
  const modalNavList = document.querySelector('.modal[data-modal="mobile-menu"]').querySelector('.main-nav__list');

  modalNavList.innerHTML = inlineNavList.innerHTML;

  const links = modalNavList.querySelectorAll('.main-nav__link');

  for (let link of links) {
    link.dataset.closeModal='';
    setLinkSmoothScroll(link);
  }

};

const updateInlineMenu = () => {
  const inlineNavList = pageHeader.querySelector('.main-nav__list');
  const modalNavList = document.querySelector('.modal[data-modal="mobile-menu"]').querySelector('.main-nav__list');

  inlineNavList.innerHTML = modalNavList.innerHTML;

  const links = inlineNavList.querySelectorAll('.main-nav__link');

  for (let link of links) {
    link.removeAttribute('data-close-modal');
  }
};

const breakpoint = window.matchMedia(`(max-width:767px)`);

const breakpointChecker = () => {
  if (breakpoint.matches) {
    updateModalMenu();
  } else {
    updateInlineMenu();
  }
};

export { initMobileMenu, breakpoint, breakpointChecker };
