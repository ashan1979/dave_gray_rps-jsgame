// Rock Paper Scissors Refactored with While Loop and an Array

let playGame = confirm("Shall we Play Rock, Paper, or Scissors?");
if (playGame) {
    //play
    while (playGame) {
        const playerChoice = prompt("Please Enter Rock, Paper, or Scissors.");
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();
            if (
                playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors"
            ) {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];

                const result =
                 playerOne === computer
                    ? "Tie Game!"
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\n wins!`
                    : playerOne === "paper" && computer === "scissors"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : playerOne === "scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
                alert(result);
                playGame = confirm("Play Again?");
                if (!playGame) alert("Ok, Thanks for Playing.");
                continue;
            } else {
                alert("You Didn't Enter Rock, Paper, or Scissors.")
                break
            }


            } else {
                    alert("I Guess You Changed Your Mind. Maybe Next Time.");
                    break
            }
        }




    } else {
        alert("Ok, Maybe next Time")
    }
