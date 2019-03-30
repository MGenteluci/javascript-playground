const { ipcMain } = require('electron');
const Game = require('../business/game');

function startGame(event) {
  event.sender.send('start-game-reply');
}

function getQuestion(event) {
  const question = Game.getRandomQuestion();

  event.sender.send('get-question-reply', question);
}

function validateAnswer(event, answer) {
  const isCorrect = Game.isAnswerCorrect(answer);

  event.sender.send('answer-question-reply', isCorrect);
}

function openChannels() {
  ipcMain.on('start-game', startGame);
  ipcMain.on('get-question', getQuestion);
  ipcMain.on('answer-question', validateAnswer);
}

module.exports = {
  openChannels
};
