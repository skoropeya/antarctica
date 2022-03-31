const cardList = document.querySelector('.cruises__list');
const cards = document.querySelectorAll('.card');
const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');

const onTouchCard = (evt) => {
  evt.preventDefault();

  if (evt.target.matches('.card__overlay') || evt.target.matches('.card__name')) {
    cards.forEach((card) => {
      if (evt.target.closest('.card') === card) {
        card.dataset.isTouch = 'true';
      } else {
        card.dataset.isTouch = 'false';
      }
    });
  }

  if (evt.target.matches('.card__link-booking')) {
    document.location.replace(evt.target.href);
  }
};

const setTouchOnCard = () => {
  if (mediaQuery.matches) {
    cardList.addEventListener('touchstart', onTouchCard);
  }
};

export {setTouchOnCard};
