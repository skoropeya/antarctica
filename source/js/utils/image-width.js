const images = document.querySelectorAll('.card img');
const card = document.querySelector('.card');

const CARD_WIDTH_DESKTOP = 260;
const CARD_WIDTH_TABLET = 309;
const CARD_WIDTH_MOBILE = 270;

const MAX_WIDTH_DESKTOP = 1366;
const WIDTH_DESKTOP = 1024;
const WIDTH_TABLET = 768;
const WIDTH_MOBILE = 320;

const getOriginalWidths = (elems) => {
  const widths = [];
  elems.forEach((elem) => {
    widths.push(elem.getAttribute('width'));
  });
  return widths;
};

const checkViewport = () => {
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

const setImageWidth = () => {
  let baseCardWidth = checkViewport();
  let cardWidth = card.clientWidth;
  const originalWidths = getOriginalWidths(images);

  if (baseCardWidth) {
    images.forEach(function (image, i) {
      const newWidth = originalWidths[i] / baseCardWidth * cardWidth;
      image.style.setProperty('width', `${newWidth}px`);
    });
  }

  window.addEventListener('resize', function () {
    baseCardWidth = checkViewport();
    cardWidth = card.clientWidth;
    if (baseCardWidth) {
      images.forEach(function (image, i) {
        const newWidth = originalWidths[i] / baseCardWidth * cardWidth;
        image.style.setProperty('width', `${newWidth}px`);
      });
    }
  });
};

export {setImageWidth};
