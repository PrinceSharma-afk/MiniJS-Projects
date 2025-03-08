const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get a random computer choice
function getComputerChoice() {
    let val = Math.floor(Math.random() * 3 + 1);
    switch (val) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

// Variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Function to get human choice using readline
function getHumanChoice() {
    rl.question("\nChoose rock, paper, or scissors (or type 'exit' to quit): ", function (humanChoice) {
        humanChoice = humanChoice.toLowerCase();
        
        if (humanChoice === "exit") {
            console.log("\nFinal Scores:");
            console.log(`You: ${humanScore} | Computer: ${computerScore}`);
            console.log("Thanks for playing!");
            rl.close();
            return;
        }

        if (["rock", "paper", "scissors"].includes(humanChoice)) {
            playGame(humanChoice);
        } else {
            console.log("❌ Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
            getHumanChoice(); // Ask again if input is invalid
        }
    });
}

// Function to determine the winner
function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    console.log(`\n🧑 You chose: ${humanChoice}`);
    console.log(`🤖 Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("🔁 It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("🎉 You win!");
        humanScore++;
    } else {
        console.log("💻 Computer wins!");
        computerScore++;
    }

    // Show updated scores
    console.log(`\n📊 Scores: You: ${humanScore} | Computer: ${computerScore}`);

    // Ask for the next round
    getHumanChoice();
}

// Start the game
console.log("🎮 Welcome to Rock-Paper-Scissors!");
getHumanChoice();
