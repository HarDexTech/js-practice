'use strict';
let myNumber = Math.floor(Math.random() * 20) + 1; //random math value for my number
// dom elements
const checkBtn = document.getElementById('checkBtn');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const scoreDisplay = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscore');
const notify = document.querySelector('.notify');
const againBtn = document.getElementById('againBtn');
const number = document.querySelector('.number');
// initialize scores
let score = 20;
let highScore = 0;

function notification(msg) {
  notify.classList.remove('invisible'); //remove invisible class from notify
  notify.textContent = msg;
  //timeout to change display after 2secs
  setTimeout(() => {
    notify.classList.add('invisible');
  }, 2000);
}

function checkAndCompare() {
  if (score > 0) {
    let guess = Number(document.querySelector('.guess').value); //get guess input and change to number
    if (guess > 20 || guess < 1) {
      notification(`Please Enter a Valid Number Between 1 and 20`); //show notification
      return;
    }

    if (guess > myNumber) {
      notification(`📈Too High`);
      score -= 1;
      scoreDisplay.textContent = score; //update score display after decreasing
    }
    if (guess < myNumber) {
      notification(`📉Too Low`);
      score -= 1;
      scoreDisplay.textContent = score; //update score display after decreasing
    }
    if (guess === myNumber) {
      notification(`🎉Correct Number`);
      document.querySelector('.guess').removeEventListener('keydown', enterKey);
      body.classList.add('bodyBg'); //change background
      checkBtn.classList.add('invisible'); //add display
      number.textContent = myNumber;
      if (highScore > score) {
        highScoreDisplay.textContent = highScore; //update highscore if previous one is higher than it
      } else {
        highScore = score; //highscore uses score as the new highscore
        highScoreDisplay.textContent = highScore;
        notify.classList.remove('invisible');
      }
    }
  } else {
    checkBtn.classList.add('invisible');
    message.textContent = `Game Over`;
  }
}
checkBtn.addEventListener('click', checkAndCompare);

document.querySelector('.guess').addEventListener('keydown', enterKey);
function enterKey(e) {
  if (e.key === 'Enter') {
    checkAndCompare();
  }
}

function playAgain() {
  //update variables
  myNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;

  body.classList.remove('bodyBg');
  document.querySelector('.guess').value = ``; //empty input
  scoreDisplay.textContent = score;
  checkBtn.classList.remove('invisible');
  message.textContent = `Start Guessing`;
  number.textContent = '?';
  document.querySelector('.guess').addEventListener('keydown', enterKey);
}
againBtn.addEventListener('click', playAgain);
