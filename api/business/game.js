const game = require(`./i18n/game-${process.env.osLang || 'en_US'}.json`);

const questions = game.questions;

function getRandomIndex() {
  return Math.floor(Math.random() * questions.length);
}

function getRandomQuestion() {
  return questions[getRandomIndex()];
}

function isAnswerCorrect({ title, choice }) {
  const question = questions.find(question => question.title === title);

  return question.answer === choice;
}

module.exports = {
  getRandomQuestion,
  isAnswerCorrect
};
