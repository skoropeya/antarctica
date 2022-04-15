import {getOriginalSize, checkScreenType} from '../utils/image-width';

const image = document.querySelector('.description img');
const boxImage = document.querySelector('.description__img-wrapper');

const SCREEN_TYPE = 'desktop';
const BASE_WIDTH = 560;

const originalWidth = getOriginalSize(image, 'width');

const setImgDescriptionWidth = () => {
  let viewportWidth = checkScreenType();

  if (viewportWidth === SCREEN_TYPE) {
    let boxWidth = boxImage.clientWidth;
    const newWidth = originalWidth / BASE_WIDTH * boxWidth;
    image.style.setProperty('width', `${newWidth}px`);
  }

  window.addEventListener('resize', function () {
    viewportWidth = checkScreenType();

    if (viewportWidth === SCREEN_TYPE) {
      let boxWidth = boxImage.clientWidth;
      const newWidth = originalWidth / BASE_WIDTH * boxWidth;
      image.style.setProperty('width', `${newWidth}px`);
    }
  });
};

export {setImgDescriptionWidth};
