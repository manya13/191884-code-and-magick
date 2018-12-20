'use strict';

(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  var coatInput = userDialog.querySelector('input[name="coat-color"]');
  var eyesInput = userDialog.querySelector('input[name="eyes-color"]');
  var fireballInput = userDialog.querySelector('input[name="fireball-color"]');
  var setupWizard = userDialog.querySelector('.setup-wizard');
  var coatColor = setupWizard.querySelector('.wizard-coat');
  var eyesColor = setupWizard.querySelector('.wizard-eyes');
  var fireballColor = userDialog.querySelector('.setup-fireball-wrap');

  var getRandomNumber = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  // функция изменения цвета
  var changeColor = function (parameter, arr, input) {
    input.value = arr[getRandomNumber(arr)];
    if (input === fireballInput) {
      parameter.style.background = input.value;
    } else {
      parameter.style.fill = input.value;
    }
  };

  // функция получения массива аналогичных магов
  var getWizards = function () {
    var wizards = [];
    for (var i = 0; i < 4; i++) {
      wizards[i] = {
        name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomNumber(WIZARD_SURNAMES)],
        coatColor: WIZARD_COAT[getRandomNumber(WIZARD_COAT)],
        eyesColor: WIZARD_EYES[getRandomNumber(WIZARD_EYES)]
      };
    }
    return wizards;
  };

  var wizardsList = getWizards();

  // клонирование шаблона с параметрами мага
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // создание похожих магов
  var getFragment = function () {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < wizardsList.length; j++) {
      fragment.appendChild(renderWizard(wizardsList[j]));
    }
    return fragment;
  };

  similarListElement.appendChild(getFragment());

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

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
})();