const controls = document.querySelector('#controls');
const restartButton = document.querySelector('#restart');
const actionButtons = document.querySelectorAll('.options');
const showResult = document.querySelector('#result');
const computerResult = document.querySelector('#computer');
const playerResult = document.querySelector('#player');

let computerScore = 0;
let userScore = 0;

controls.addEventListener('click', (event) => {
    const choice = event.target.id;
    if (choice === 'controls') return;

    const result = playRound(choice, getComputerChoice());
    showResult.innerText = result;

    if (result.includes('win')) {
        userScore++;
        playerResult.textContent = userScore;
    }
    else if (result.includes('lose')) {
        computerScore++;
        computerResult.textContent = computerScore;
    }

    if (userScore == 5 || computerScore == 5) {
        actionButtons.forEach(element => element.disabled = true);
        (userScore > computerScore) ? showResult.innerText = 'You won the game!' : 
        showResult.innerText = 'The computer won!';
    }
});

restartButton.addEventListener('click', restartGame);

function getComputerChoice() {
    let randomNumber = Math.trunc(Math.random() * 3);
    switch(randomNumber) {
        case 0: 
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2: 
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function restartGame() {
    userScore = 0;
    computerScore = 0;

    playerResult.textContent = userScore;
    computerResult.textContent = computerScore;
    showResult.innerText = ''

    actionButtons.forEach(element => element.disabled = false);
}