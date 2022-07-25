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
    console.log('hello there')
    let winNumber = 0;
    let loseNumber = 0;
    let track = 0;
    const buttons = document.querySelectorAll('button');
    console.log(buttons);

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(track);
            let playerSelection = button.id;
            let computerSelection = computerPlay();
            
            let result = playRound(playerSelection, computerSelection)
            
            if (result.substr(0,3) == 'win') {
                winNumber++;
            }
            if (result.substr(0,4) == 'lose'){
                loseNumber++;
            }
            
            
            track++;
            if (track <= 5) {
                const stat = document.querySelector('.status');
                const div = document.createElement('div');
                div.textContent = `Result of the round ${track}:  ${result}`;
                stat.appendChild(div);
            }

            if (track === 5){
                let lastMessage;
                console.log(winNumber, loseNumber)
                if (winNumber > loseNumber) {
                    lastMessage = 'Player Won! Congrulations';
                } else if (winNumber > loseNumber) {
                    lastMessage = 'You lost :/ Try Again!';
                } else {
                    lastMessage = 'It is a tie so everybody won!';
                }
                const stat = document.querySelector('.status');
                const endOfMatchMessage = `${lastMessage} playerScore is ${winNumber} computerScore is ${loseNumber}`
                const header = document.createElement('h3');
                header.textContent = endOfMatchMessage;
                stat.appendChild(header);
    
                return winNumber,loseNumber;
            }
        }
        )});

    
}

game();
