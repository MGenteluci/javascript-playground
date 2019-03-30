require('./config/language')();
const { app } = require('electron');
const { start, close } = require('./electron/starter');

function main() {
  app.on('ready', start);
  app.on('quit', close);
}

main();
