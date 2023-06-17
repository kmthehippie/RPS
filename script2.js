const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const button = document.querySelectorAll("button");
const compChoice = document.querySelector(".comp-choice");
const playerChoice = document.querySelector(".player-choice");
const playerScore = document.querySelector(".player-score");
const compScore = document.querySelector(".comp-score");
const textResult = document.querySelector(".text-result");

const paraCompChoice = document.createElement("p");
const paraPlayerChoice = document.createElement("p");
const paraTextResult = document.createElement("p");
const paraPlayerScore = document.createElement("p");
const paraCompScore = document.createElement("p");

let getCompChoice = function(){
    let choice = Math.floor(Math.random()*3 +1);
    if (choice === 1){
        return paraCompChoice.textContent = "rock";
    } else if (choice === 2){
        return paraCompChoice.textContent = "paper";
    } else if (choice === 3){
        return paraCompChoice.textContent = "scissors";
    }

}

let getPlayerChoice;
button.forEach((rps)=>{
    rps.addEventListener("click", (rps)=>{
        getPlayerChoice = rps.target.id;
        paraPlayerChoice.textContent = getPlayerChoice;
        // playerChoice.append(paraPlayerChoice);

        playRound(getPlayerChoice,getCompChoice());
        paraCompScore.textContent = compScoreResult;
        compScore.append(paraCompScore);
        paraPlayerScore.textContent = playerScoreResult;
        playerScore.append(paraPlayerScore);  

        if (playerScoreResult === 5){
            playerScoreResult = 0;
            compScoreResult = 0;
            paraTextResult.textContent = "Winner Winner Chicken Dinner!"; 
            
        } else if (compScoreResult === 5) {
            playerScoreResult = 0;
            compScoreResult = 0;
            paraTextResult.textContent = "You lost to the computer. Try Again?"; 
        }       
    })
})

let compScoreResult = Number();
let playerScoreResult = Number();


let playRound = function(player, comp){

    //function needs to compare between player selection and comp selection
    if (player === "rock"){
        if (comp === "rock"){
            return paraTextResult.textContent = "Tie!";
        } else if (comp === "paper"){
            compScoreResult ++;
            return paraTextResult.textContent = "You Lose!";
        } else if (comp === "scissors"){
            playerScoreResult = playerScoreResult +1;
            return paraTextResult.textContent = "You Win!";
        };
    } else if (player === "paper"){
        if(comp === "paper"){
            return paraTextResult.textContent = "Tie!";
        } else if (comp === "scissors"){
            compScoreResult ++;
            return paraTextResult.textContent = "You Lose!";
        } else if (comp === "rock"){
            playerScoreResult ++;
            return paraTextResult.textContent = "You Win!";
        }
    } else if (player === "scissors"){
        if (comp === "scissors"){
            return paraTextResult.textContent = "Tie!";
        } else if (comp === "rock"){
            compScoreResult ++;
            return paraTextResult.textContent = "You Lose!";
        } else if(comp === "paper"){
            playerScoreResult ++;
            return paraTextResult.textContent = "You Win!";
        };
    }
 }

 compChoice.append(paraCompChoice);
 playerChoice.append(paraPlayerChoice);
 textResult.append(paraTextResult);



