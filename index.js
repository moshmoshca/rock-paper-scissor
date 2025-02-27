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