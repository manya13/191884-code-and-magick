'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var userNameInput = userDialog.querySelector('.setup-user-name');

  // закрытие через ESC
  var onPopupEscPress = function (evt) {
    if (userNameInput === document.activeElement) {
      onPopupEscPress();
    } else if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  // открытие попапа
  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  // закрытие попапа
  var closePopup = function () {
    userDialog.classList.add('hidden');
    userDialog.style.top = '80px';
    userDialog.style.left = '50%';
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  // ограничения для поля ввода имени
  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });
})();
