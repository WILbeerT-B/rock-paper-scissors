let playerCount = 0, computerCount = 0;

//get the random choice of the computer
function getComputerChoice() {
    let computerChoice = "";
    const randomNum = Math.floor(Math.random() * 3);
    if(randomNum == 0){
        computerChoice = "Rock";   
    } else if(randomNum == 1) {
        computerChoice = "Paper";
    } else if(randomNum == 2) {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}
//play a one round game and determines the winner of the round
function playRound(playerSelection, computerSelection) {
    //Player wins
    if((playerSelection == "rock") && (computerSelection == "Scissors")){
        playerCount++;
        return "You win this round! Rock beats Scissors";
        
    } else if((playerSelection == "paper") && (computerSelection == "Rock")){
        playerCount++;
        return "You got this round! Paper beats Rock";
        
    } else if((playerSelection == "scissors") && (computerSelection == "Paper")){
        playerCount++;
        return "You got the round! Scissors beats Paper";
        
    //Computer wins
    } else if((playerSelection == "scissors") && (computerSelection == "Rock")){
        computerCount++;
        return "You lose this round! Rock beats Scissors!";
        
    } else if((playerSelection == "rock") && (computerSelection == "Paper")){
        computerCount++;
        return "Computer win this round! Paper beats rock!";
        
    } else if((playerSelection == "paper") && (computerSelection == "Scissors")){
        computerCount++;
        return "You lose the round! Scissor beats paper!";
        
    } else {
        return "Round is EVEN!";
    }
}

//get the scores of the player and computer
function getScoreCount() {
    return console.log(`Player score: ${playerCount}, Computer score: ${computerCount}`);
}

//determine the winner of the game
function getWinner() {
    if(playerCount > computerCount) {
        return console.log("Player wins the game!");
    } else if(playerCount<computerCount){
        return console.log("Computer wins the game!");
    } else {
        return console.log("Game was even!")
    }
}

//call the playRound function and play a 5 round game
function game() {
    for(let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        getScoreCount();
    }
}


game();
getWinner();

