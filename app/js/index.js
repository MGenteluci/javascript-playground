const i18n = require(`../../i18n/${process.env.osLang || 'en_US'}.json`);

const startGameBtn = document.querySelector('.start-game');
const appTitle = document.querySelector('.app-title');

function setInitialTexts() {
  startGameBtn.textContent = i18n.START_GAME_BUTTON;
  appTitle.textContent = i18n.APP_TITLE;
}

(() => {
  setInitialTexts();
})();
