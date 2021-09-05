'use strict';

let randomNumber = Math.ceil(Math.random() * 100);
console.log(`Mi número aleatorio es: ${randomNumber}`);

const guess = document.querySelector('.js_guessField');
const guessSubmit = document.querySelector('.js_guessSubmit');

const clue = document.querySelector('.js_textClue');
const attempts = document.querySelector('.js_attempts');
let count = 1;


function checkNumber() {
    let userGuess = parseInt(guess.value);
    if (userGuess <= 0 || userGuess > 100) {
        clue.innerHTML = `El número debe estar
        entre 1 y 100.`;
    } else if (userGuess === randomNumber) {
        clue.innerHTML = 'Has ganado campeona!!!';
    } else if (userGuess > randomNumber) {
        clue.innerHTML = 'Demasiado alto.';
    } else if (userGuess < randomNumber) {
        clue.innerHTML = 'Demasiado bajo.';
    } else {
        clue.innerHTML = `Acuerdate que debe ser un número`;
    }

}

function countAttempts() {
    attempts.innerHTML = `Número de intentos: ${count++}`;
}

function handleSubmitBtn(event) {
    event.preventDefault();
    checkNumber();
    countAttempts();
}

guessSubmit.addEventListener('click', handleSubmitBtn);
