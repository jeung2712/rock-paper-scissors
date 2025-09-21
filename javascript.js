let humanSelection;
let computerSelection;

let getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return random === 0 ? "rock" : random === 1 ? "paper" : "scissors";
};

let getHumanChoice = (input) => {
  humanSelection = input;
  return humanSelection;
};

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
      console.log("Draw");
      return "Draw!";
    }
    if (
      (humanChoice == "rock" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "rock")
    ) {
      computerScore++;
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      return "Computer wins";
    } else {
      humanScore++;
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      return "You win";
    }
  }
  let round = 1;
  while (round <= 5) {
    playRound(getHumanChoice(prompt("Enter choice:")), getComputerChoice());
    round++;
  }
}

playGame();
