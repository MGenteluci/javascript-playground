const { ipcMain } = require('electron');
const Game = require('../business/game');

function startGame(event) {
  event.sender.send('start-game-reply');
}

function getQuestion(event) {
  const question = Game.getRandomQuestion();

  event.sender.send('get-question-reply', question);
}

function openChannels() {
  ipcMain.on('start-game', startGame);
  ipcMain.on('get-question', getQuestion);
}

module.exports = {
  openChannels
};
