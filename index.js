game();

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

function game() {
    let playerSelection, computerSelection, result;
    let computerScore = 0;
    let userScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase()
        computerSelection = getComputerChoice();

        result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('win')) {
            userScore++;
        }
        else if (result.includes('lose')) {
            computerScore++;
        }
    }

    (userScore > computerScore) ? console.log('You won!') : (computerScore > userScore) ? console.log('You lost!') : 'It\'s a tie';
}