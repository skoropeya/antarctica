const header = document.querySelector('.page-header');
const mainNav = document.querySelector('.main-nav');
const menu = document.querySelector('.main-nav__list-box');
const overlay = document.querySelector('.overlay');

const useJs = () => {
  header.dataset.isJs = true;
  mainNav.dataset.isJs = true;
};

const openMenu = () => {
  mainNav.dataset.isOpen = true;
  menu.dataset.isOpen = true;
  overlay.dataset.isOverlay = true;
};

const closeMenu = () => {
  mainNav.dataset.isOpen = false;
  menu.dataset.isOpen = false;
  overlay.dataset.isOverlay = false;
};

const checkMenu = () => {
  if (mainNav.dataset.isOpen === 'true') {
    return true;
  }
  return false;
};

const onClickMenuToggle = (evt) => {
  evt.preventDefault();
  if (checkMenu()) {
    closeMenu();
  } else {
    openMenu();
  }
};

export {useJs, onClickMenuToggle, checkMenu, closeMenu};
