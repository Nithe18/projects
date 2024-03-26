'use strict';
/*console.logdisplayMessage());displayMessage() = '🙌 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

//Coding challenge#1
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value);
  console.log(x, typeof x);

  if (!x) {
    displayMessage('No input found please enter a number');
  } else if (x === secretNumber) {
    displayMessage('Yaay guess is correct💯');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '50rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //When guess is wrong
  } else if (x !== secretNumber) {
    if (score > 1) {
      displayMessage(x < secretNumber ? 'Guess is low 📉' : 'Guess is high📈'); // using ternary operator to avoid repeated codes.
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game over💣');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
});
