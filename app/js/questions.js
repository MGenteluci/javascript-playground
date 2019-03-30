const { ipcRenderer } = require('electron');

const formQuestion = document.querySelector('.form-question');
const currentQuestion = {};

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

function presentResult(event, result) {
  if (result) window.alert('voce acertou');
  else window.alert('voce errou');
}

(() => {
  ipcRenderer.on('get-question-reply', createQuestion);
  getQuestion();

  ipcRenderer.on('answer-question-reply', presentResult);

  document.querySelector('.send-btn')
    .addEventListener('click', answerQuestion);
})();
