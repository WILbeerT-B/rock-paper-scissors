let playerCount = 0, computerCount = 0;
const resultContainer = document.querySelector('.results-container');
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
    return computerChoice;
}
//play a one round game and determines the winner of the round
function playRound(playerSelection, computerSelection) {
    //Player wins
    if((playerSelection == "Rock") && (computerSelection == "Scissors")){
        playerCount++;
        r1.textContent = "You rocked this round! Rock beats scissors";
        
    } else if((playerSelection == "Paper") && (computerSelection == "Rock")){
        playerCount++;
        r1.textContent = "You wrapped this round! Paper beats rock";
        
    } else if((playerSelection == "Scissors") && (computerSelection == "Paper")){
        playerCount++;
        r1.textContent = "You got this round! Scissors beats paper";
        
    //Computer wins
    } else if((playerSelection == "Scissors") && (computerSelection == "Rock")){
        computerCount++;
        r1.textContent = "You lose this round! Rock beats scissors!";
        
    } else if((playerSelection == "Rock") && (computerSelection == "Paper")){
        computerCount++;
        r1.textContent = "Computer win this round! Paper beats rock!";
        
    } else if((playerSelection == "Paper") && (computerSelection == "Scissors")){
        computerCount++;
        r1.textContent = "You lose this round! Scissors beats paper!";
    
    //Round is TIE
    } else {
        r1.textContent = "Round is TIE!";
    }
    resultContainer.appendChild(r1);
}

//display the scores of the player and computer
//display the winner of the game
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

//call the playRound function and play a 5 round game
function game() {
    
    let playerSelection = "";
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll('button');
    // we use the .forEach method to iterate through each button
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
}

game();