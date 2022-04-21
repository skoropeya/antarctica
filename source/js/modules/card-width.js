import {getOriginalSize, checkScreenType, getCardWidth} from '../utils/image-width';

const images = document.querySelectorAll('.card img');
const card = document.querySelector('.card');

const originalImages = [];
images.forEach(function (image) {
  originalImages.push({
    img: image,
    originalWidth: getOriginalSize(image, 'width'),
  });
});

const setSize = (elem, valueWidth, valueHeight) => {
  elem.style.setProperty('width', valueWidth);
  elem.style.setProperty('height', valueHeight);
};

const calculateSize = () => {
  let baseCardWidth = getCardWidth();
  let cardWidth = card.clientWidth;

  if (baseCardWidth) {
    images.forEach(function (image, i) {
      const originalWidth = originalImages[i].originalWidth;
      const newWidth = originalWidth / baseCardWidth * cardWidth;
      setSize(image, `${newWidth}px`, 'auto');
    });
  }
};

const setImageWidth = () => {
  let viewportWidth = checkScreenType();
  if (viewportWidth) {
    calculateSize();
  }

  window.addEventListener('resize', function () {
    viewportWidth = checkScreenType();
    if (viewportWidth) {
      calculateSize();
    }
  });
};

export {setImageWidth};
