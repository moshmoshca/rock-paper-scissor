const getUserChoice = (userChoice) => {
    console.log("User picked:", userChoice);


}

document.getElementById('rock-btn').addEventListener("click", function() {
    let userChoice = "rock";
    let computerChoice = getComputerChoice();
    let result = determinedWinner(userChoice, computerChoice);

    document.getElementById("winner-msg").innerText = result;
    document.getElementById("evil-choice").innerText = `I choose the mighty ${computerChoice}`;
});

document.getElementById('paper-btn').addEventListener("click", function() {
    let userChoice = "paper";
    let computerChoice = getComputerChoice()
    let result = determinedWinner(userChoice, computerChoice);

    document.getElementById("winner-msg").innerText = result;
    document.getElementById("evil-choice").innerText = `I choose the formidable ${computerChoice}`;
});

document.getElementById('scissor-btn').addEventListener("click", function() {
    let userChoice = "scissor";
    let computerChoice = getComputerChoice()
    let result = determinedWinner(userChoice, computerChoice);

    document.getElementById("winner-msg").innerText = result;
    document.getElementById("evil-choice").innerText = `I choose the best weapon: ${computerChoice}`;
});

// COMPUTER CHOICE

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
    }
    return randomNumber;
}

const determinedWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'A tie! No! You should be losing!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'scissor') {
            return 'You won this time! Next time you\'re mine!';
        } else {
            return 'Victory is MINE!';
        }
    }

    if (userChoice === 'paper') {
        if(computerChoice === 'rock') {
            return 'You won! However, it is not over!';
        } else {
            return "Who knew you could turn into so many little pieces";
        }
    }

    if (userChoice === 'scissor') {
        if (computerChoice === 'paper') {
            return 'I refuse to accept that you have won! Surrender!';
        } else {
            return 'Ha! The victory is ones again all mine!';
        }
    }
}