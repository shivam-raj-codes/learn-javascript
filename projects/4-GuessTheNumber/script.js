
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); // create paragraph

let prevGuess = []; // array

let numGuess = 1;

let playGame = true; // flag

if(playGame) { // is Available to Paly Game
    submit.addEventListener('click', function(e) {
        e.preventDefault(); // preventing default work of submit, don't take away value anywhere stop here i'll take value

        // takes value from user
        const guess = parseInt(userInput.value);
        console.log(guess);

        validateGuess(guess); // passing guessed - value by user to next functon
    });
}

function validateGuess(guess) {
    // validate is guess Num is in range(1-100)
    if(isNaN(guess)) {
        alert("please enter a valid number");
    } 
    else if(guess < 1) {
        alert("please enter a number more or equal to 1");
    }
    else if (guess > 100) {
        alert("please enter a number less than 100");
    } 
    else {
        prevGuess.push(guess); // push guess into array

        if(numGuess === 10) {
         displayGuess(guess); // guessed num goes for dispaly
            displayMessage(`Game Over. Random number was ${randomNumber}`);

            endGame();
        } 
        else{
         displayGuess(guess); // guessed num goes for dispaly

            checkGuess(guess); // was Guess correct or not ?
        }
    }
}

function checkGuess (guess) {
    // guessNum = randomNum or Not?
    if(guess === randomNumber) {
        displayMessage("You Guessed it right");
        
        endGame();
    }

    else if(guess < randomNumber) {
        displayMessage(`Number is TOO low`);
    }

    else if(guess > randomNumber) {
        displayMessage(`Number is TOO high`);
    }
}

// for Clean-Up
function displayGuess(guess) {
    // clean value, update array, update remianing guess times 

    userInput.value = ''; // cleanUp past - value

    guessSlot.innerHTML += `${guess}, `; // pushing guessed value

    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage (message) { // will used for DOM-Manupulation
    // will pass a message and print that as it is

    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame() {
    userInput.value = ''; // clean value
    userInput.setAttribute('disabled', ''); // disabled('key', 'value');
    
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;

    startOver.appendChild(p);

    playGame = false; // flag set to -> false

    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");

    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);

        prevGuess = []; // reset

        numGuess = 1; // restart number of guess

        guessSlot.innerHTML = '';

        remaining.innerHTML = `${11 - numGuess}`; // reset remaining

        userInput.removeAttribute('disabled');

        startOver.removeChild(p);

        playGame = true;
    })
}

