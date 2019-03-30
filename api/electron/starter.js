const { BrowserWindow } = require('electron');
const { openChannels } = require('./channels');
const windowOptions = require('./window-options');

let win;

function start() {
  win = new BrowserWindow(windowOptions);
  win.loadFile(`${__dirname}/../../app/public/index.html`);

  openChannels();
}

function close() {
  win = null;
}

module.exports = {
  start,
  close
};
