const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = checkWinner(playerSelection, computerSelection);
    
    if (result === "Tie") {
        displayResult("It's a Tie!");
    } else if (result === "Player") {
        playerScore++;
        displayResult(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;
        displayResult(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    
    updateScore();
    checkGameEnd();
}

function updateScore() {
    document.getElementById("score").innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function checkGameEnd() {
    if (playerScore === 5) {
        displayResult("Congratulations! You win the game!");
        resetGame();
    } else if (computerScore === 5) {
        displayResult("Sorry! Computer wins the game!");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
}

function displayResult(message) {
    const resultDiv = document.getElementById("results");
    const p = document.createElement("p");
    p.textContent = message;
    resultDiv.appendChild(p);
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
