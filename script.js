
const para = document.createElement("p");
const compChoice = document.querySelector(".comp-choice");
const playerChoice = document.querySelector(".player-choice");
const resultA = document.querySelector(".result-a");
const resultB = document.querySelector(".result-b");
const score = document.querySelector(".score");
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

let scoreResult = 0;

//create a function play that takes player selection and comp selection
let playRound = function (player, comp){

    let compResult = comp;
    let playerResult = player;
    compChoice.append(compResult + " ")
    playerChoice.append(playerResult + " ")
    console.log(`Player has chosen: ${player}`);
    console.log(`Computer result is: ${comp}`);
    


    player = player.toLowerCase();

//function needs to compare between player selection and comp selection
    if (player === "rock"){
        if (comp === "rock"){
            return para.textContent = "Tie!";
        } else if (comp === "paper"){
            return para.textContent = "You Lose!";
        } else if (comp === "scissors"){
            scoreResult = scoreResult +1;
            return para.textContent = "You Win!";
        };
    } else if (player === "paper"){
        if(comp === "paper"){
            return para.textContent = "Tie!";
        } else if (comp === "scissors"){
            return para.textContent = "You Lose!";
        } else if (comp === "rock"){
            scoreResult ++;
            return para.textContent = "You Win!";
        }
    } else if (player === "scissors"){
        if (comp === "scissors"){
            return para.textContent = "Tie!";
        } else if (comp === "rock"){
            return para.textContent = "You Lose!";
        } else if(comp === "paper"){
            scoreResult ++;
            return para.textContent = "You Win!";
        };
    } else {
        return para.textContent = "You cancelled";
    }


};


//create a scoreResult variable for the player
let game = function() {
        for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++){
            
            let playResult = playRound(askPlayer(), getCompChoice());
    
            console.log(playResult);
            resultA.append(playResult + " ");
            score.append(scoreResult + " ");
            console.log(scoreResult);
  
        }
        if (scoreResult >= 3){
            console.log ("Winner!");
            resultB.append(`${scoreResult} / 5
            Winner!`);
            return
        } else if (scoreResult === 2){
            console.log ("Tie!");
            resultB.append(`${scoreResult} / 5
            Tie!`)
        } else {
            console.log("Try Again")
            resultB.append(`${scoreResult} / 5
            Try Again!`)
        }
};


//when button clicks, playGames again.
button.addEventListener("click", ()=>{
    compChoice.textContent = "";
    playerChoice.textContent = "";
    resultA.textContent = "";
    score.textContent = "";
    resultB.textContent = "";
    scoreResult = 0;
    game();
});






