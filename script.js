console.log("hello fucking world")

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    //console.log(choice);
    return choice;

}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock, Paper or Scissors?")
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}




function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection)
    if (result == "Tie") {
        return "Its a Tie!"
    }
    else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function playGame() {
    console.log("lets play rock paper scissors f*ckers!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// console.log(playRound(playerSelection, computerSelection));

