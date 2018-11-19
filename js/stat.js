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
var barHeight = -150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y * 4);
    ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y * 4 + FONT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + LEFT_GAP + (BAR_WIDTH + BAR_GAP) * i, TOP_GAP - GAP * 2 + (barHeight * times[i]) / maxTime);
    ctx.globalAlpha = Math.random() + 0.1;
    ctx.fillStyle = 'blue';
    if (players[i] === 'Вы'){
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    };
    ctx.fillRect(CLOUD_X + LEFT_GAP + (BAR_WIDTH + BAR_GAP) * i, TOP_GAP - GAP, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + LEFT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + TOP_GAP);
   }
};
