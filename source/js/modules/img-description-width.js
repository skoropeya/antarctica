import {getOriginalWidth, checkViewport} from '../utils/image-width';

const image = document.querySelector('.description img');
const boxImage = document.querySelector('.description__img-wrapper');

const SCREEN_TYPE = 'desktop';
const BASE_WIDTH = 560;

const originalWidth = getOriginalWidth(image);

const setImgDescriptionWidth = () => {
  let viewportWidth = checkViewport();

  if (viewportWidth === SCREEN_TYPE) {
    let boxWidth = boxImage.clientWidth;
    const newWidth = originalWidth / BASE_WIDTH * boxWidth;
    image.style.setProperty('width', `${newWidth}px`);
  }

  window.addEventListener('resize', function () {
    viewportWidth = checkViewport();

    if (viewportWidth === SCREEN_TYPE) {
      let boxWidth = boxImage.clientWidth;
      const newWidth = originalWidth / BASE_WIDTH * boxWidth;
      image.style.setProperty('width', `${newWidth}px`);
    }
  });
};

export {setImgDescriptionWidth};
