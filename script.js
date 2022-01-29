const gestures = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(gestures[button.id]);
    });
});



function computerPlay() {
    return gestures[Math.floor(Math.random() * gestures.length)]
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    playerIndex = gestures.indexOf(playerSelection);
    computerIndex = gestures.indexOf(computerSelection);

    let result = [playerIndex, computerIndex]

    if (playerIndex != computerIndex) {
        result.push((computerIndex == (playerIndex + 1) % 3) ? 'computer' : 'player');
    } else {
        result.push('tie');
    }
    updateScore(result);
}

function updateScore(result) {
    const player = document.querySelector('#playerscore');
    const computer = document.querySelector('#computerscore');
    const round = document.querySelector('#playedRound');
    const winner = document.querySelector('#winner');

    if (result[2] != 'tie') {
        round.textContent = result[2] + ' wins round! ' + gestures[result[0]] + ' beats ' + gestures[result[1]];
    } else {
        round.textContent = "it's a tie! " + gestures[result[0]] + ' is equal to ' + gestures[result[1]];
    }

    if (result[2] == 'player') {
        playerScore++;
        player.textContent = 'player score: ' + playerScore;
    } else if (result[2] == 'computer') {
        computerScore++;
        computer.textContent = 'computer score: ' + computerScore;
    } else {
        return;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        winner.textContent = result[2] + ' won!';
    }
}