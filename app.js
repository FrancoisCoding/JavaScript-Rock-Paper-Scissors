// Variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Functions
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {}

function win(userChoice, computerChoice) {
    // Increase User Score
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}.You win!`
}

function lose() {
    // Increase Computer Score
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function draw() {
    console.log("Draw");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        // Wins
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
            // Loses
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
            // Draws
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    })
    paper_div.addEventListener('click', function () {
        game("p")
    })
    scissors_div.addEventListener('click', function () {
        game("s")
    })
}

// Function Calls
main();
