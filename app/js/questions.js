const { ipcRenderer } = require('electron');
const i18n = require(`../../i18n/${process.env.osLang || 'en_US'}.json`);

const sendAnswerBtn = document.querySelector('.send-btn');
const endGameBtn = document.querySelector('.end-game');
const nextQuestionBtn = document.querySelector('.next-question');

const formQuestion = document.querySelector('.form-question');

const currentQuestion = {};

function setInitialTexts() {
  sendAnswerBtn.textContent = i18n.SEND_ANSWER_BUTTON;
  endGameBtn.textContent = i18n.END_GAME_BUTTON;
  nextQuestionBtn.textContent = i18n.NEXT_QUESTION_BUTTON;
}

function createQuestion(event, question) {
  Object.assign(currentQuestion, question);

  const title = document.querySelector('h1.question-title');
  title.textContent = question.title;

  const optionA = document.querySelector('.text-option-a');
  optionA.value = question.optionA;

  const optionB = document.querySelector('.text-option-b');
  optionB.value = question.optionB;

  const optionC = document.querySelector('.text-option-c');
  optionC.value = question.optionC;

  const optionD = document.querySelector('.text-option-d');
  optionD.value = question.optionD;
}

function getQuestion() {
  ipcRenderer.send('get-question');
}

function answerQuestion(event) {
  event.preventDefault();

  const answer = {
    title: currentQuestion.title,
    choice: formQuestion.answer.value
  };

  ipcRenderer.send('answer-question', answer);
}

function renderPostAnswerButtons() {
  document.querySelector('.done').classList.add('hidden');
  document.querySelector('.post-answer').classList.remove('hidden');
}

function displayAlert(hiddenAlert) {
  hiddenAlert.classList.remove('hidden');
}

function renderCorrectAnswer() {
  const alertText = document.querySelector('.alert');
  alertText.classList.add('alert-success');
  alertText.textContent = 'Resposta Correta!';
  displayAlert(alertText);
}

function renderWrongAnswer() {
  const alertText = document.querySelector('.alert');
  alertText.classList.add('alert-danger');
  alertText.textContent = `Correção:\n${currentQuestion.explanation}`;
  displayAlert(alertText);
}

function presentResult(event, result) {
  renderPostAnswerButtons();
  return result ? renderCorrectAnswer() : renderWrongAnswer();
}

(() => {
  setInitialTexts();

  ipcRenderer.on('get-question-reply', createQuestion);
  getQuestion();

  ipcRenderer.on('answer-question-reply', presentResult);

  sendAnswerBtn.addEventListener('click', answerQuestion);
})();
