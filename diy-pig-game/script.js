'use strict';
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const img = document.querySelector('img');
let current = document.getElementById('current--0');
// const current1 = document.getElementById('current--1');
let score = document.getElementById('score--0');
// const score1 = document.getElementById('score--1');
const body = document.querySelector('body');
const section = document.querySelectorAll('section');

img.classList.add('hidden');

function rollDiceFunc() {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  current.textContent = diceNumber + Number(current.textContent);
  img.src = `dice-${diceNumber}.png`;
  img.classList.remove('hidden');
}
rollDice.addEventListener('click', rollDiceFunc);

function holdFunc() {
  score.textContent = Number(score.textContent) + Number(current.textContent);
  current.textContent = 0;
  body.classList.toggle('bgchange');
  section[0].classList.toggle('player--active');
  section[1].classList.toggle('player--active');
  score = document.getElementById('score--1');
  current = document.getElementById('current--1');
}
hold.addEventListener('click', holdFunc);
