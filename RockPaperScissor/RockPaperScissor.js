let userScore = 0;let computerScore = 0;let userScore_span = document.getElementById("user-score");let computerScore_span = document.getElementById("computer-score");// console.log(computerScore_span);// const scoreBoard_div = document.querySelector(".score-board");const result_p = document.querySelector(".result > p");const rock_div = document.getElementById("r");console.log(rock_div);const paper_div = document.getElementById("p");const scissors_div= document.getElementById("s");const smallUserWord = "(user)".fontsize(3).sub();const smallCompWord = "(computer)".fontsize(3).sub();let Start = document.getElementById("action-message");function win(userChoice,computerChoice){    userScore++;    userScore_span.innerHTML=userScore;    computerScore_span.innerHTML = computerScore;    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} is stronger than ${convertToWord(computerChoice)} ${smallCompWord}. You win!`;    // document.getElementById(userChoice).classList.add('green-glow');    if(userScore === 10){        alert("Game over! You reach 20!  ");        computerScore=0;        userScore=0;    }}function lose(userChoice,computerChoice){    computerScore++;    userScore_span.innerHTML=userScore;    computerScore_span.innerHTML = computerScore;    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} is weaker than ${convertToWord(computerChoice)} ${smallCompWord}. You lost.`;    // document.getElementById(userChoice).classList.add('red-glow');    if(computerScore === 10){        alert("Game over! You lose... ");        computerScore=0;        userScore=0;    }}function draw(userChoice,computerChoice){    userScore_span.innerHTML=userScore;    computerScore_span.innerHTML = computerScore;    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} and ${convertToWord(computerChoice)} ${smallCompWord} are equal. It's a draw.`    // document.getElementById(userChoice).classList.add('gray-glow');}function main(){    rock_div.addEventListener('click', function () {        game("r");    });    paper_div.addEventListener('click', function () {        game("p");    });    scissors_div.addEventListener('click',function() {        game("s");    });}main();function getComputerChoice() {    const choices = ['r', 'p', 's'];    const randomNumber = Math.floor(Math.random() * 3);    return choices[randomNumber];}function game(userChoice) {    const computerChoice = getComputerChoice();    console.log(getComputerChoice());    switch (userChoice + computerChoice) {        case "rs":        case "pr":        case "sp":            win(userChoice , computerChoice);            break;        case "sr":        case "rp":        case "ps":            lose(userChoice ,computerChoice);            break;        case "ss":        case "rr":        case "pp":            draw(userChoice ,computerChoice);            break;    }}function convertToWord(letter) {    if(letter=== "r")return "Rock";    if(letter=== "p")return "Paper";    if(letter=== "s")return "Scissors";}function startAgain(){    userScore =0;    computerScore=0;    userScore_span.innerHTML = 0;    computerScore_span.innerHTML = 0;    result_p.innerHTML = "Choose one of them.";}