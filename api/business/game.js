const game = require(`./i18n/game-${process.env.osLang || 'en_US'}.json`);

function getRandomQuestion() {
  return game.questions[0];
}

module.exports = {
  getRandomQuestion
};
