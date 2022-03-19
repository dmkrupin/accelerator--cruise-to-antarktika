const telInputElement = document.querySelector('.form__input[name=tel]');

//Обработчик-валидатор поля ввода телефона
const onTelInputInput = () => {
    const telMask = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const input = telInputElement.value;
      //Проверяем телефон на соответствие маске
      if (!telMask.test(input)) {
        telInputElement.setCustomValidity('Введите телефон в формате +7 000 00 00');
      }
      else {
        telInputElement.setCustomValidity('');
      }
    telInputElement.reportValidity();
};

const initFormValidation = () => {
    //Валидируем поле ввода телефона
    telInputElement.addEventListener('input', onTelInputInput);
};

export { initFormValidation };
