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
    //console.log(computerChoice);
    return computerChoice;
}
//play a one round game and determines the winner of the round
function playRound(playerSelection, computerSelection) {
    console.log(`Player: ${playerSelection} , Computer: ${computerSelection}`);
    //Player wins
    if((playerSelection == "Rock") && (computerSelection == "Scissors")){
        playerCount++;
        // return "You win this round! Rock beats Scissors";
        console.log("You win this round! Rock beats Scissors");
        
    } else if((playerSelection == "Paper") && (computerSelection == "Rock")){
        playerCount++;
        console.log("You got this round! Paper beats Rock");
        
    } else if((playerSelection == "Scissors") && (computerSelection == "Paper")){
        playerCount++;
        console.log("You got the round! Scissors beats Paper");
        
    //Computer wins
    } else if((playerSelection == "Scissors") && (computerSelection == "Rock")){
        computerCount++;
        //return "You lose this round! Rock beats Scissors!";
        console.log("You lose this round! Rock beats Scissors!");
        
    } else if((playerSelection == "Rock") && (computerSelection == "Paper")){
        computerCount++;
        //return "Computer win this round! Paper beats rock!";
        console.log("Computer win this round! Paper beats rock!");
        
    } else if((playerSelection == "Paper") && (computerSelection == "Scissors")){
        computerCount++;
        //return "You lose the round! Scissor beats paper!";
        console.log("You lose the round! Scissor beats paper!");
        
    } else {
        //return "Round is EVEN!";
        console.log("Round is EVEN!");
    }
}

//get the scores of the player and computer
function getScoreCount() {
    console.log(`SCORE: Player: ${playerCount}, Computer: ${computerCount}`);
    if(playerCount == 5) {
        console.log("Player wins the game!");
        playerCount = 0;
        computerCount = 0;
    } else if (computerCount == 5) {
        console.log("Computer wins the game!");
        playerCount = 0;
        computerCount = 0;
    }
}

//determine the winner of the game
/* function getWinner() {
    if(playerCount == 5) {
        console.log("Player wins the game!");
    } else if (computerCount == 5) {
        console.log("Computer wins the game!");
    }
} */

//call the playRound function and play a 5 round game
function game() {
    
    let playerSelection = "";
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll('button');
    // we use the .forEach method to iterate through each button
    //for(let i = 1; i <= 5; i++) {
        buttons.forEach((button) => {

            // and for each one we add a 'click' listener
            button.addEventListener('click', () => {
                playerSelection = button.id;
                const computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
                getScoreCount();
            });
            
        });
        //const playerSelection = prompt("Rock, Paper or Scissors?");
        
        //console.log(playRound(playerSelection, computerSelection));
        //const computerSelection = getComputerChoice();
        //playRound(playerSelection, computerSelection);
        //getScoreCount();
    //}
    //getWinner();
}


game();


