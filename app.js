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
};

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
};

function win(userChoice, computerChoice) {
    // Increase User Score
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    // Border Change
};

function lose(userChoice, computerChoice) {
    // Increase Computer Score
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...`;
};

function draw(userChoice, computerChoice) {
    // Draw
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw. `;
};

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
};

function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    });
    paper_div.addEventListener('click', function () {
        game("p")
    });
    scissors_div.addEventListener('click', function () {
        game("s")
    });
};

// Function Calls
main();
