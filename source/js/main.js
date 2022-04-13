import {iosVhFix} from './utils/ios-vh-fix';
import {useJs, onClickMenuToggle as menuSwitch} from './modules/menu';
import {onClickMenuItem} from './modules/slow-scroll';
import {setTouchOnCard} from './modules/show-card';
import {setViewportWidth} from './utils/vw-fix';
import {setValidateForm} from './modules/validate-form';
import {setImageWidth} from './modules/card-width';
import {setImgDescriptionWidth} from './modules/img-description-width';

const menuToggle = document.querySelector('.main-nav__toggle');
const menuHeader = document.querySelector('.menu--header');

// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();
  setViewportWidth();
  setImageWidth();
  // setImgDescriptionWidth();
  // Modules
  // ---------------------------------
  useJs();
  menuToggle.addEventListener('click', menuSwitch);
  menuHeader.addEventListener('click', onClickMenuItem);
  setTouchOnCard();
  setValidateForm();
});
