let playerCount = 0, computerCount = 0;
const resultContainer = document.querySelector('.results');
const r1 = document.createElement('p');
const r2 = document.createElement('p');
const r3 = document.createElement('p');
const r4 = document.createElement('p');

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
    //console.log(`Player: ${playerSelection} , Computer: ${computerSelection}`);
    //Player wins
    if((playerSelection == "Rock") && (computerSelection == "Scissors")){
        playerCount++;
        // return "You win this round! Rock beats Scissors";
        //console.log("You win this round! Rock beats Scissors");
        r1.textContent = "You win this round! Rock beats Scissors";
        
    } else if((playerSelection == "Paper") && (computerSelection == "Rock")){
        playerCount++;
        //console.log("You got this round! Paper beats Rock");
        r1.textContent = "You got this round! Paper beats Rock";
        
    } else if((playerSelection == "Scissors") && (computerSelection == "Paper")){
        playerCount++;
        //console.log("You got the round! Scissors beats Paper");
        r1.textContent = "You got the round! Scissors beats Paper";
        
    //Computer wins
    } else if((playerSelection == "Scissors") && (computerSelection == "Rock")){
        computerCount++;
        //return "You lose this round! Rock beats Scissors!";
        //console.log("You lose this round! Rock beats Scissors!");
        r1.textContent = "You lose this round! Rock beats Scissors!";
        
    } else if((playerSelection == "Rock") && (computerSelection == "Paper")){
        computerCount++;
        //return "Computer win this round! Paper beats rock!";
        //console.log("Computer win this round! Paper beats rock!");
        r1.textContent = "Computer win this round! Paper beats rock!";
        
    } else if((playerSelection == "Paper") && (computerSelection == "Scissors")){
        computerCount++;
        //return "You lose the round! Scissor beats paper!";
        //console.log("You lose the round! Scissor beats paper!");
        r1.textContent = "You lose the round! Scissor beats paper!";
        
    } else {
        //return "Round is EVEN!";
        //console.log("Round is EVEN!");
        r1.textContent = "Round is TIE!";
    }
    resultContainer.appendChild(r1);
}

//get the scores of the player and computer
function getScoreCount() {
    r3.textContent = `(SCORE) Player: ${playerCount}, Computer: ${computerCount}`;
    if(playerCount == 5) {
        r4.textContent = "Player wins the game! (Reload to play again)";
        playerCount = 0;
        computerCount = 0;
        document.getElementById("Rock").disabled = true;
        document.getElementById("Paper").disabled = true;
        document.getElementById("Scissors").disabled = true;
    } else if (computerCount == 5) {
        r4.textContent = "Computer wins the game! (Reload to play again)";
        playerCount = 0;
        computerCount = 0;
        document.getElementById("Rock").disabled = true;
        document.getElementById("Paper").disabled = true;
        document.getElementById("Scissors").disabled = true;
    }
    resultContainer.appendChild(r3);
    resultContainer.appendChild(r4);

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
                r2.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}`;
                getScoreCount();
            });
            resultContainer.appendChild(r2);        
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


