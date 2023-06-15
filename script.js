
const para = document.createElement("p");
const compChoice = document.querySelector(".comp-choice");
const playerChoice = document.querySelector(".player-choice");
const resultA = document.querySelector(".result-a");
const resultB = document.querySelector(".result-b");
const resultC = document.querySelector(".result-c");
const button = document.querySelector("button");




//create prompt to get input from player
let askPlayer = function(){
let promptResult = prompt("What is your choice?", "rock, scissors or paper");
if(promptResult === undefined || promptResult === null){
    return para.textContent = "You cancelled!";
    }else if (promptResult.toLowerCase() === "rock" || promptResult.toLowerCase() === "scissors" || promptResult.toLowerCase() === "paper"){
    return promptResult;
    } else {
    return askPlayer();  
    }
}

//create a function for computer to make a choice and return its result
let getCompChoice = function(){
    let choice = Math.floor(Math.random()*3 +1) 
    if (choice === 1) {
        return  para.textContent = "rock";
    } else if (choice === 2){
        return  para.textContent = "paper";
    } else {
        return  para.textContent = "scissors";
    }
}

let playerScoreResult = 0;
let compScoreResult = 0;

//create a function play that takes player selection and comp selection
let playRound = function (player, comp){

    let compResult = comp;
    let playerResult = player;
    compChoice.append(compResult + " ")
    playerChoice.append(playerResult + " ")
    console.log(`Player has chosen: ${player}`);
    console.log(`Computer has chosen: ${comp}`);
    


    player = player.toLowerCase();

//function needs to compare between player selection and comp selection
    if (player === "rock"){
        if (comp === "rock"){
            return para.textContent = "Tie!";
        } else if (comp === "paper"){
            compScoreResult ++;
            return para.textContent = "You Lose!";
        } else if (comp === "scissors"){
            playerScoreResult = playerScoreResult +1;
            return para.textContent = "You Win!";
        };
    } else if (player === "paper"){
        if(comp === "paper"){
            return para.textContent = "Tie!";
        } else if (comp === "scissors"){
            compScoreResult ++;
            return para.textContent = "You Lose!";
        } else if (comp === "rock"){
            playerScoreResult ++;
            return para.textContent = "You Win!";
        }
    } else if (player === "scissors"){
        if (comp === "scissors"){
            return para.textContent = "Tie!";
        } else if (comp === "rock"){
            compScoreResult ++;
            return para.textContent = "You Lose!";
        } else if(comp === "paper"){
            playerScoreResult ++;
            return para.textContent = "You Win!";
        };
    } else {
        return para.textContent = "You cancelled";
    }


};


//create a scoreResult variable for the player
let game = function() {

    let playResult = playRound(askPlayer(), getCompChoice());

    resultA.append(playResult + " ");
    resultB.textContent = `${playerScoreResult} | ${compScoreResult}`
    console.log(playerScoreResult);
    console.log(compScoreResult);
    
    if (playerScoreResult === 5){
        playerScoreResult = 0;
        compScoreResult = 0;
        resultC.textContent = "Winner Winner Chicken Dinner!"; 
        
    } else if (compScoreResult === 5) {
        playerScoreResult = 0;
        compScoreResult = 0;
        resultC.textContent = "You lost to the computer. Try Again?"; 
    }       
};


//when button clicks, playGames again.
button.addEventListener("click", ()=>{
    compChoice.textContent = "";
    playerChoice.textContent = "";
    resultA.textContent = "";
    resultB.textContent = "";
    game();
});






