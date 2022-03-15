import {iosVhFix} from './utils/ios-vh-fix';
import {useJs, onClickMenuToggle as menuSwitch} from './modules/menu';
import {onClickMenuItem} from './modules/slow-scroll';
import {setTouchOnCard} from './modules/show-card';

const menuToggle = document.querySelector('.main-nav__toggle');
const menuHeader = document.querySelector('.menu--header');

// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();

  // Modules
  // ---------------------------------
  useJs();
  menuToggle.addEventListener('click', menuSwitch);
  menuHeader.addEventListener('click', onClickMenuItem);
  setTouchOnCard();
});
