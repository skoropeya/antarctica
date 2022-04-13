import {getOriginalWidth, checkViewport} from '../utils/image-width';

const images = document.querySelectorAll('.card img');
const card = document.querySelector('.card');

const CARD_WIDTHS = {
  '': 0,
  'desktop': 260,
  'tablet': 309,
  'mobile': 270,
};

const setImageWidth = () => {
  let baseCardWidth = CARD_WIDTHS[checkViewport()];
  let cardWidth = card.clientWidth;

  const originalWidths = [];

  images.forEach(function (image) {
    originalWidths.push(getOriginalWidth(image));
  });

  if (baseCardWidth) {
    images.forEach(function (image, i) {
      const newWidth = originalWidths[i] / baseCardWidth * cardWidth;
      image.style.setProperty('width', `${newWidth}px`);
      image.style.setProperty('height', 'auto');
    });
  }

  window.addEventListener('resize', function () {
    baseCardWidth = CARD_WIDTHS[checkViewport()];
    cardWidth = card.clientWidth;
    if (baseCardWidth) {
      images.forEach(function (image, i) {
        const newWidth = originalWidths[i] / baseCardWidth * cardWidth;
        image.style.setProperty('width', `${newWidth}px`);
        image.style.setProperty('height', 'auto');
      });
    }
  });
};

export {setImageWidth};
