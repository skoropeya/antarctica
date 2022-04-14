import {getOriginalSize, checkViewport} from '../utils/image-width';

const images = document.querySelectorAll('.card img');
const cards = document.querySelectorAll('.card');

const CARD_PROPORTIONS = {
  '': 0,
  'desktop': {width: 260, height: 386},
  'tablet': {width: 309, height: 386},
  'mobile': {width: 270, height: 386},
};

const originalImages = [];
images.forEach(function (image) {
  const originalWidth = getOriginalSize(image, 'width');
  const originalHeight = getOriginalSize(image, 'height');
  originalImages.push({item: image, width: originalWidth, height: originalHeight});
});

const setImageWidth = () => {

  const cardProportions = [];
  cards.forEach(function (card) {
    const cardWidth = card.clientWidth;
    const cardHeight = card.clientHeight;
    cardProportions.push({item: card, width: cardWidth, height: cardHeight});
  });

  let baseCardProportions = CARD_PROPORTIONS[checkViewport()];

  if (baseCardProportions) {
    images.forEach(function (image, i) {

    });
  }


  // if (baseCardWidth) {
  //   images.forEach(function (image, i) {
  //     const newWidth = originalWidths[i] / baseCardWidth * cardWidth;
  //     image.style.setProperty('width', `${newWidth}px`);
  //     image.style.setProperty('height', 'auto');
  //   });
  // }

  // window.addEventListener('resize', function () {
  //   baseCardWidth = CARD_WIDTHS[checkViewport()];
  //   cardWidth = card.clientWidth;
  //   if (baseCardWidth) {
  //     images.forEach(function (image, i) {
  //       const newWidth = originalWidths[i] / baseCardWidth * cardWidth;
  //       image.style.setProperty('width', `${newWidth}px`);
  //       image.style.setProperty('height', 'auto');
  //     });
  //   }
  // });
};

export {setImageWidth};
