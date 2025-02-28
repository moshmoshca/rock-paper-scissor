const getUserChoiceRock = userInput => {
   userInput = 'rock';
   console.log('rock');
   return userInput;;
}

const getUserChoicePaper = userInput => {
    userInput = 'paper';
    console.log('paper');
    return userInput;
}

const getUserChoiceScissor = userInput => {
    userInput = 'scissor';
    console.log('scissor');
    return userInput;
}
 
let rockBtn = document.getElementById("rock-btn").addEventListener("click", getUserChoiceRock);
let paperBtn = document.getElementById("paper-btn").addEventListener("click", getUserChoicePaper);
let scissorBtn = document.getElementById("scissor-btn").addEventListener("click", getUserChoiceScissor);

const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break
    }
}

const battle = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie! We'll meet again someday!.";
    }

    if (userChoice === 'rock') {
        if(computerChoice === 'scissor') {
            return 'Argh! You beat me with a Rock! How dare you!?';
        } else {
            return 'Ha! You are not a match for my greatness!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'No! I refuse this defeat!';
        } else {
            return 'Yes! Muahahaaa! In pieces, as you should!';
        }
    }

    if (userChoice === 'scissor') {
        if (computerChoice === 'paper') {
            return 'Where did you get that? Give it to me!';
        } else {
            return "I'm all powerful and mighty!"
        }
    }
}