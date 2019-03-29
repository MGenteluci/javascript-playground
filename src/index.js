const { app } = require('electron');
const { configureAppLanguage } = require('./config/language');
const { start, close } = require('./electron/starter');

function main() {
  configureAppLanguage();

  app.on('ready', start);
  app.on('quit', close);
}

main();
