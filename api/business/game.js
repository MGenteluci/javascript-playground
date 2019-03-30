const game = require(`./i18n/game-${process.env.osLang || 'en_US'}.json`);

function getRandomQuestion() {
  return game.questions[0];
}

function isAnswerCorrect({ title, choice }) {
  const question = game.questions.find(question => question.title === title);

  return question.answer === choice;
}

module.exports = {
  getRandomQuestion,
  isAnswerCorrect
};
