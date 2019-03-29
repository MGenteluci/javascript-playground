const { ipcMain } = require('electron');

function execute() {
  console.log('started');
}

function openChannels() {
  ipcMain.on('main', execute);
}

module.exports = {
  openChannels
};
