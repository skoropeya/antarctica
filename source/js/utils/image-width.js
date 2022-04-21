const MAX_WIDTH_DESKTOP = 1366;
const WIDTH_DESKTOP = 1024;
const WIDTH_TABLET = 768;
const WIDTH_MOBILE = 320;

const CARD_WIDTH_DESKTOP = 260;
const CARD_WIDTH_TABLET = 309;
const CARD_WIDTH_MOBILE = 270;

const getOriginalSize = (elem, attr) => elem.getAttribute(attr);

const checkScreenType = () => {
  const vw = window.innerWidth;
  let screenType = '';
  if (vw >= WIDTH_DESKTOP && vw < MAX_WIDTH_DESKTOP) {
    screenType = 'desktop';
  } else if (vw > WIDTH_TABLET && vw < WIDTH_DESKTOP) {
    screenType = 'tablet';
  } else if (vw > WIDTH_MOBILE && vw < WIDTH_TABLET) {
    screenType = 'mobile';
  }
  return screenType;
};

const getCardWidth = () => {
  const vw = window.innerWidth;
  let baseCardWidth = 0;
  if (vw >= WIDTH_DESKTOP && vw < MAX_WIDTH_DESKTOP) {
    baseCardWidth = CARD_WIDTH_DESKTOP;
  } else if (vw > WIDTH_TABLET && vw < WIDTH_DESKTOP) {
    baseCardWidth = CARD_WIDTH_TABLET;
  } else if (vw > WIDTH_MOBILE && vw < WIDTH_TABLET) {
    baseCardWidth = CARD_WIDTH_MOBILE;
  }
  return baseCardWidth;
};

export {getOriginalSize, checkScreenType, getCardWidth};
