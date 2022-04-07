const form = document.querySelector('.booking form');
const inputPhone = form.querySelector('input[type="tel"]');

const checkNumberPhone = () => {
  const validity = inputPhone.validity;
  let message = '';
  if (validity.patternMismatch) {
    message = 'Введите только цифры номера телефона';
  }
  inputPhone.setCustomValidity(message);
};

const setValidateForm = () => {
  inputPhone.addEventListener('input', checkNumberPhone);
};

export {setValidateForm};
