const game = require(`./i18n/game-${process.env.osLang || 'en_US'}.json`);

function getRandomIndex(questions = game.questions) {
  return Math.floor(Math.random() * questions.length);
}

function getRandomQuestion(questions = game.questions) {
  return questions[getRandomIndex()];
}

function isAnswerCorrect({ title, choice }) {
  const question = game.questions.find(question => question.title === title);

  return question.answer === choice;
}

module.exports = {
  getRandomQuestion,
  isAnswerCorrect,
  // Exported only for test
  getRandomIndex
};
