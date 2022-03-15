const cardList = document.querySelector('.cruises__list');
const cards = document.querySelectorAll('.card');
const mediaQuery = window.matchMedia('(pointer:coarse)');

const onTouchCard = (evt) => {
  evt.preventDefault();

  if (evt.target.matches('.card')) {
    cards.forEach((card) => {
      if (evt.target === card) {
        evt.target.dataset.isTouch = true;
      } else {
        card.dataset.isTouch = false;
      }
      card.dataset.isTouch = false;
    });
  }
};

const setTouchOnCard = () => {
  if (mediaQuery.matches) {
    cardList.addEventListener('touchstart', onTouchCard);
  }
};

export {setTouchOnCard};
