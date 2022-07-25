function computerPlay() {
    number = Math.floor(Math.random() * 3);

    if (number == 0) {
        return "rock";
    }
    
    if (number == 1) {
        return "paper";
    }
    
    return "scissors";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock'){
        if (computerSelection == 'rock'){
            return `tie`;
        }
        if (computerSelection == 'paper'){
            return `lose  ${computerSelection} beats ${playerSelection}`;
        }
        return `win ${playerSelection} beats ${computerSelection}`;
    }

    if (playerSelection == 'paper'){
        if (computerSelection == 'rock'){
            return `win ${playerSelection} beats ${computerSelection}`;
        }
        if (computerSelection == 'paper'){
            return 'tie';
        }
        return `lose  ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection == 'scissors'){
        if (computerSelection == 'scissors'){
            return `lose  ${computerSelection} beats ${playerSelection}`;
        }
        if (computerSelection == 'paper'){
            return `win ${playerSelection} beats ${computerSelection}`;
        }
        return `lose  ${computerSelection} beats ${playerSelection}`;
    }
    
}

function game(){
    let winNumber = 0;
    let loseNumber = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt("rock, paper, scissors?");
        result = playRound(playerSelection, computerSelection);
        if (result.substr(0,3) == 'win') {
            winNumber++;
        }
        
        if (result.substr(0,4) == 'lose'){
            loseNumber++;
        }
    }
    if (winNumber > loseNumber) {
        console.log('Player Won! Congrulations');
    } else if (winNumber > loseNumber) {
        console.log('You lost :/ Try Again!');
    } else {
        console.log('It is a tie so everybody won!');
    }
    console.log(winNumber,loseNumber)
    return winNumber,loseNumber
}

game();