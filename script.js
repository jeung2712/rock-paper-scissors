let humanSelection;
let computerSelection;
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return random === 0 ? "rock" : random === 1 ? "paper" : "scissors";
};

let getHumanChoice = (input) => {
  humanSelection = input;
  return humanSelection;
};

function playGame() {
  let round = 1;
  while (round <= 5) {
    playRound(getHumanChoice(prompt("Enter choice:")), getComputerChoice());
    round++;
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == computerChoice) {
    return "Draw!";
  }
  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore++;
    return `You Lose! ${computerChoice} beats ${humanChoice}`;
  } else {
    humanScore++;
    return `You Win! ${humanChoice} beats ${computerChoice}`;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (computerScore === 5 || humanScore === 5) button.preventDefault();
    const descriptionContainer = document.querySelector(".description");
    const scoreContainer = document.querySelector(".score");
    if (document.querySelector("#results"))
      descriptionContainer.removeChild(document.querySelector("#results"));
    const text = document.createElement("p");
    text.setAttribute("id", "results");
    text.textContent = playRound(button.id, getComputerChoice());
    descriptionContainer.appendChild(text);

    if (computerScore === 5 || humanScore === 5) {
      const announceWinner = document.createElement("h2");
      announceWinner.textContent =
        computerScore === 5 ? "COMPUTER WINS!" : "YOU WIN!";
      descriptionContainer.appendChild(announceWinner);
    }

    if (document.querySelector("#score"))
      scoreContainer.removeChild(document.querySelector("#score"));
    const score = document.createElement("p");
    score.setAttribute("id", "score");
    score.textContent = `Computer Score: ${computerScore} Your Score: ${humanScore}`;
    scoreContainer.appendChild(score);
  });
});
