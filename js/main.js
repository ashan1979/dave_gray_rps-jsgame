<<<<<<< HEAD
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
=======
// ROck Paper Scissors Game with *Functions*

const initGame = () => {
    const startGame = confirm("Shall we Play Rock, Paper, or Scissors?");
    startGame ? playGame() : alert("Okay, Maybe Next Time.");
}

//Game Flow Function

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue
        }
        if (!playerChoice) {
            decideNotTOPlay();
            break
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice) {
            invalidChoice();
            continue
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        dispplayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
}

const getPlayerChoice = () => {
    return prompt("Please enter Rock, Paper, or Scissors.");
}

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
}

const decideNotTOPlay = () => {
    alert("I Guess You Changed Your Mind. Maybe Next Time.");
}

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ) {
        return playerChoice;
    } else {
        return false;
    }
}

const invalidChoice = () => {
    alert("You Didn't Enter Rock, Paper, or Scissors.");
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
}

const determineWinner = (player, computer) => {
    const winner =
        player === computer
        ? "Tie Game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;

    return winner;
}

const dispplayResult = (result) => {
    alert(result);
}

const askToPlayAgain = () => {
    return confirm("Play Again?");
}

const thanksForPlaying = () => {
    alert("Okay, Thanks for Playing.");
}

initGame();
>>>>>>> 0bffa7a4350278d82b1795a0bc93efb52adc2b91
