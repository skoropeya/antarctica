const inputPhone = document.querySelector('.form input[type="tel"]');

const checkNumberPhone = () => {
  const validity = inputPhone.validity;
  let message = '';
  if (validity.patternMismatch) {
    message = 'Введите 11 цифр номера телефона';
  }
  inputPhone.setCustomValidity(message);
};

const setValidateForm = () => {
  inputPhone.addEventListener('input', checkNumberPhone);
};

export {setValidateForm};