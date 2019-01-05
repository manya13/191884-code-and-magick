'use strict';

(function () {

  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  var coatInput = userDialog.querySelector('input[name="coat-color"]');
  var eyesInput = userDialog.querySelector('input[name="eyes-color"]');
  var fireballInput = userDialog.querySelector('input[name="fireball-color"]');
  var setupWizard = userDialog.querySelector('.setup-wizard');
  var coatColor = setupWizard.querySelector('.wizard-coat');
  var eyesColor = setupWizard.querySelector('.wizard-eyes');
  var fireballColor = userDialog.querySelector('.setup-fireball-wrap');
  var form = userDialog.querySelector('.setup-wizard-form');


  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  var getRandomNumber = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  // функция изменения цвета
  var changeColor = function (parameter, arr, input) {
    input.value = arr[getRandomNumber(arr)];
    switch (input) {
      case fireballInput:
        parameter.style.background = input.value;
        break;
      case coatInput:
        parameter.style.fill = input.value;
        wizard.onCoatChange(input.value);
        break;
      case eyesInput:
        parameter.style.fill = input.value;
        wizard.onEyesChange(input.value);
        break;
    }
  };

  // изменение цвета параметров мага при клике
  coatColor.addEventListener('click', function () {
    changeColor(coatColor, WIZARD_COAT, coatInput);
  });

  eyesColor.addEventListener('click', function () {
    changeColor(eyesColor, WIZARD_EYES, eyesInput);
  });

  fireballColor.addEventListener('click', function () {
    changeColor(fireballColor, WIZARD_FIREBALLS, fireballInput);
  });

  return window.wizard = wizard;
})();
