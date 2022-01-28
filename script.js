const gestures = ['rock', 'paper', 'scissors']

function computerPlay() {
    return gestures[Math.floor(Math.random() * gestures.length)]
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase()
    const computerSelection = computerPlay()
    playerIndex = gestures.indexOf(playerSelection)
    computerIndex = gestures.indexOf(computerSelection)

    let result
    if (playerIndex !== computerIndex) {
        result = (computerIndex === (playerIndex + 1) % 3) ? 'computer' : 'player'
    } else {
        result = 'tie'
    }
    return result
}

function game() {
    let rounds = 5
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < rounds; i++) {
        let playerSelection = window.prompt('Rock, Paper or Scissors? ')
        let computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection)

        switch (result) {
            case ('player'):
                console.log('Player Wins Round!')
                playerScore++
                break;
            case ('computer'):
                console.log('Computer Wins Round!')
                computerScore++
                break;
            case ('tie'):
                console.log('Tie!')
                break;
            default:
                break;
        }
        console.log(rounds - (i + 1) + ' rounds left..')
    }
    if (playerScore > computerScore) {
        console.log('Player won!')
    } else if (playerScore < computerScore) {
        console.log('Computer won!')
    } else {
        console.log('Its a tie!')
    }
}

game()

