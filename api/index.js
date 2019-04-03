const { configureAppLanguage } = require('./config/language');
const { app } = require('electron');
const { start, close } = require('./electron/starter');

function main() {
  configureAppLanguage();

  app.on('ready', start);
  app.on('quit', close);
}

module.exports = {
  main
};
