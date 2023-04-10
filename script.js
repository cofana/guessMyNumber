'use strict';

var secretNumber = Math.floor(Math.random() * 20 + 1);
var score = 20;
const again = document.querySelector('.again');
var highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

var checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When there is no input
  if (!guess) {
    displayMessage('No Number!');
  }
  //When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game.');
      document.querySelector('.score').textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
