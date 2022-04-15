import {getOriginalSize, checkScreenType} from '../utils/image-width';

const images = document.querySelectorAll('.card img');
const cards = document.querySelectorAll('.card');

const BASE_HEIGHT = 386;

const originalImages = [];
images.forEach(function (image) {
  originalImages.push({
    img: image,
    originalHeight: getOriginalSize(image, 'height'),
    originalWidth: getOriginalSize(image, 'width'),
  });
});

const setSize = (elem, valueWidth, valueHeight) => {
  elem.style.setProperty('width', valueWidth);
  elem.style.setProperty('height', valueHeight);
};

const calculateSize = (viewportWidth) => {
  if (viewportWidth) {
    images.forEach(function (image, i) {
      const cardHeight = cards[i].clientHeight;
      const cardWidth = cards[i].clientWidth;
      image.style.setProperty('left', '0');

      if (cardHeight > BASE_HEIGHT) {
        const currentHeight = +window.getComputedStyle(image).height.slice(0, -2);
        const newHeight = (cardHeight / currentHeight) * currentHeight;
        setSize(image, 'auto', `${newHeight}px`);
      }

      const currentWidth = +window.getComputedStyle(image).width.slice(0, -2);

      if (cardWidth > currentWidth) {
        const newWidth = (cardWidth / currentWidth) * currentWidth;
        setSize(image, `${newWidth}px`, 'auto');
      }
    });
  } else {
    images.forEach(function (image, i) {
      const cardHeight = cards[i].clientHeight;
      if (cardHeight > BASE_HEIGHT) {
        const currentHeight = +window.getComputedStyle(image).height.slice(0, -2);
        const newHeight = (cardHeight / currentHeight) * currentHeight;
        setSize(image, 'auto', `${newHeight}px`);
      }
    });
  }
};

const setImageWidth = () => {
  let viewportWidth = checkScreenType();
  calculateSize(viewportWidth);

  window.addEventListener('resize', function () {
    viewportWidth = checkScreenType();
    calculateSize(viewportWidth);
  });
};

export {setImageWidth};
