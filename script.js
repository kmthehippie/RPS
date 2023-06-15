
const para = document.createElement("p");
const compChoice = document.querySelector(".comp-choice");
const playerChoice = document.querySelector(".player-choice");
const resultA = document.querySelector(".result-a");
const resultB = document.querySelector(".result-b");
const button = document.querySelector("button");




//create prompt to get input from player

let askPlayer = function(){
let promptResult = prompt("What is your choice?", "rock, scissors or paper");
// promptResult = promptResult.toLowerCase();
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


//create a function play that takes player selection and comp selection

let play = function (player, comp){
    console.log(`Player has chosen: ${player}`);
    console.log(`Computer result is: ${comp}`);
    let compResult = comp;
    compChoice.append(compResult)
    let playerResult = player;
    playerChoice.append(playerResult)
//function needs to compare between player selection and comp selection
if (player === "rock"){
    if (comp === "rock"){
        return para.textContent = "Tie!";
    } else if (comp === "paper"){
        return para.textContent = "You Lose!";
    } else {
        return para.textContent = "You Win!";
    };
} else if (player === "paper"){
    if(comp === "paper"){
        return para.textContent = "Tie!";
    } else if (comp === "scissors"){
        return para.textContent = "You Lose!";
    } else {
        return para.textContent = "You Win!";
    }
} else {
    if (comp === "scissors"){
        return para.textContent = "Tie!";
    } else if (comp === "rock"){
        return para.textContent = "You Lose!";
    } else {
        return para.textContent = "You Win!";
    };
}
};



let game = function(){
   

}


button.addEventListener("click", function game() {
    let score = 0;
    let gamesPlayed = 0;
    while(gamesPlayed < 5){
        let playResult = play(askPlayer(), getCompChoice());
        console.log(playResult);
        resultA.append(playResult);
        if (playResult === "You Win!"){
            score ++;
            gamesPlayed = gamesPlayed + 1;
        } else if (playResult === "You Lose!"){
            gamesPlayed = gamesPlayed + 1;
        } else if (playResult === "You cancelled!"){
            break;
        };
    };
    if (score > 3) { 
        console.log("Winner")
    }else {
        console.log("Try Again")
    }
});




//create a score variable for the player




//when button clicks, playGames again.



