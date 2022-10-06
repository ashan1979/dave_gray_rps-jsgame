//first interactive game

let playGame = confirm("Shall we Play Rock, Paper or Scissors?");
if (playGame) {
    //play
    let playerChoice = prompt("Please Enter Rock, Paper or Scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissors"
            ) {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer =
                computerChoice === 1
                    ? "rock"
                : computerChoice === 2
                    ? "paper"
                : "scissors";

            let result =
                playerOne === computer
                    ? "Tie Game!"
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : playerOne=== "scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : `playerOne: ${playerOne}\ncomputer: ${computer}\nComputer wins!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Okay, Thanks for Playing");
        }
    } else {
        alert(" I guess You Changed Your Mind. Maybe Next Time")
    }
} else {
    alert("Okay, Maybe Next Time");
}