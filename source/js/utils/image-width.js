const MAX_WIDTH_DESKTOP = 1366;
const WIDTH_DESKTOP = 1024;
const WIDTH_TABLET = 768;
const WIDTH_MOBILE = 320;

const getOriginalWidth = (elem) => elem.getAttribute('width');

const checkViewport = () => {
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

export {getOriginalWidth, checkViewport};
