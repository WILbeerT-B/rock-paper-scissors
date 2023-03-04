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

function playRound(playerSelection, computerSelection) {
    /* if((playerSelection == "rock") && (computerSelection == "Rock") ||
       (playerSelection == "paper") && (computerSelection == "Paper") ||
       (playerSelection == "scissors") && (computerSelection == "Scissors")) {
            return "Game is EVEN!!!" */
    
    //Player wins
    if((playerSelection == "rock") && (computerSelection == "Scissors")){
        return "You win! Rock beats Scissors"   
    } else if((playerSelection == "paper") && (computerSelection == "Rock")){
        return "You win! Paper beats Rock"
    } else if((playerSelection == "scissors") && (computerSelection == "Paper")){
        return "You win! Scissors beats Paper"
    
    //Computer wins
    } else if((playerSelection == "scissors") && (computerSelection == "Rock")){
        return "You lose! Rock beats Scissors!"
    } else if((playerSelection == "rock") && (computerSelection == "Paper")){
        return "You lose! Paper beats rock!"
    } else if((playerSelection == "paper") && (computerSelection == "Scissors")){
        return "You lose! Scissor beats paper!"
    } else {
        return "Game is EVEN!"
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));