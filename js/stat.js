'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var LEFT_GAP = 40;
var BAR_GAP = 50;
var TOP_GAP = 250;
var FONT_HEIGHT = 18;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getStatisticsXPosition = function (serialNumber) {
  return CLOUD_X + LEFT_GAP + (BAR_WIDTH + BAR_GAP) * serialNumber;
};

var getStatisticsYPosition = function (numberOfIndents) {
  return TOP_GAP - GAP * numberOfIndents;
};

var getTextXPosition = function () {
  return CLOUD_X + GAP * 2;
};

var getTextYPosition = function () {
  return CLOUD_Y * 4;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', getTextXPosition(), getTextYPosition());
    ctx.fillText('Список результатов:', getTextXPosition(), getTextYPosition() + FONT_HEIGHT);
    ctx.fillText(Math.round(times[i]), getStatisticsXPosition(i), getStatisticsYPosition(2) + (-BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(1) + ')';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(getStatisticsXPosition(i), getStatisticsYPosition(1), BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], getStatisticsXPosition(i), CLOUD_Y + TOP_GAP);
  }
};
