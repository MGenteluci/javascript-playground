const { ipcRenderer } = require('electron');
const i18n = require(`../../i18n/${process.env.osLang || 'en_US'}.json`);

const startGameBtn = document.querySelector('.start-game');
const appTitle = document.querySelector('.app-title');

function setInitialTexts() {
  startGameBtn.textContent = i18n.START_GAME_BUTTON;
  appTitle.textContent = i18n.APP_TITLE;
}

function startGame(event) {
  event.preventDefault();

  ipcRenderer.send('start-game');
}

function startGameReply() {
  window.location.href = 'questions.html';
}

(() => {
  setInitialTexts();

  startGameBtn.addEventListener('click', startGame);
  ipcRenderer.on('start-game-reply', startGameReply);
})();
