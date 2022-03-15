import {checkMenu, closeMenu} from './menu';

const mediaQuery = window.matchMedia('(max-width: 320px)');

const onClickMenuItem = (evt) => {
  evt.preventDefault();

  if (evt.target.matches('a[href^="#"')) {
    let href = evt.target.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    if (mediaQuery.matches && checkMenu()) {
      closeMenu();
    }

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export {onClickMenuItem};
