const { ipcMain } = require('electron');

function startGame(event) {
  event.sender.send('start-game-reply');
}

function openChannels() {
  ipcMain.on('start-game', startGame);
}

module.exports = {
  openChannels
};
