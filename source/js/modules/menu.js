const header = document.querySelector('.page-header');
const mainNav = document.querySelector('.main-nav');
const menu = document.querySelector('.main-nav__list-box');
const overlay = document.querySelector('.overlay');
const main = document.querySelector('.page-main');

const useJs = () => {
  header.dataset.isJs = true;
  mainNav.dataset.isJs = true;
};

const openMenu = () => {
  mainNav.dataset.isOpen = true;
  menu.dataset.isOpen = true;
  overlay.dataset.isOverlay = true;
  document.body.style.overflow = 'hidden';
  main.dataset.isText = false;
  overlay.addEventListener('touchstart', onOverlayClick);
};

const closeMenu = () => {
  mainNav.dataset.isOpen = false;
  menu.dataset.isOpen = false;
  overlay.dataset.isOverlay = false;
  document.body.style.overflow = 'visible';
  main.dataset.isText = true;
  overlay.removeEventListener('touchstart', onOverlayClick);
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

const onOverlayClick = (evt) => {
  if (!evt.target.closest('.main-nav')) {
    closeMenu();
  }
};

export {useJs, onClickMenuToggle, checkMenu, closeMenu};
