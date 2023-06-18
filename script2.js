
const select = document.querySelectorAll("#select");
const compSelect = document.querySelector(".comp-select");
const compChoice = document.querySelector(".comp-choice");
const playerSelect = document.querySelector(".player-select");
const playerChoice = document.querySelector(".player-choice");
const playerScore = document.querySelector(".player-score");
const compScore = document.querySelector(".comp-score");
const textResult = document.querySelector(".text-result");
const playerSelection = document.querySelector(".player-selection");

const paraCompChoice = document.createElement("p");
const imgCompChoice = document.createElement("img");
const paraPlayerChoice = document.createElement("p");
const imgPlayerChoice = document.createElement("img");
const paraTextResult = document.createElement("p");
const paraPlayerScore = document.createElement("p");
const paraCompScore = document.createElement("p");

let getCompChoice = function(){
    let choice = Math.floor(Math.random()*3 +1);
    if (choice === 1){
        imgCompChoice.src = "images/rock.png"
        compChoice.appendChild(imgCompChoice);
        return paraCompChoice.textContent = "rock";
    } else if (choice === 2){
        imgCompChoice.src = "images/paper.png"
        compChoice.appendChild(imgCompChoice);
        return paraCompChoice.textContent = "paper";
    } else if (choice === 3){
        imgCompChoice.src = "images/scissors.png"
        compChoice.appendChild(imgCompChoice);
        return paraCompChoice.textContent = "scissors";
    }

}


let compScoreResult = Number();
let playerScoreResult = Number();

textResult.addEventListener("click",()=>{
    playerScoreResult = 0;
    compScoreResult = 0;
    paraCompScore.textContent = compScoreResult;
    compScore.append(paraCompScore);
    paraPlayerScore.textContent = playerScoreResult;
    playerScore.append(paraPlayerScore);  

    
    textResult.style.fontSize = "16px";
    paraTextResult.textContent = "";
    textResult.append(paraTextResult);

    playerSelection.style.display = "flex";
    playerSelect.style.display = "block";
    compSelect.style.display = "block";
    playerChoice.style.display = "block";
    compChoice.style.display = "block";

})

let getPlayerChoice;
select.forEach((selection)=>{
    selection.addEventListener("click", (rps)=>{
        getPlayerChoice = rps.target.id;
        paraPlayerChoice.textContent = getPlayerChoice;
        addImage(getPlayerChoice);
        
        playRound(getPlayerChoice,getCompChoice());
        paraCompScore.textContent = compScoreResult;
        compScore.append(paraCompScore);
        paraPlayerScore.textContent = playerScoreResult;
        playerScore.append(paraPlayerScore);  

        if (playerScoreResult === 5){
            playerScoreResult = 0;
            compScoreResult = 0;
            compChoice.style.display = "none";
            playerChoice.style.display = "none";
            paraTextResult.textContent = `Winner Winner Chicken Dinner!
            Click Me to Play Again!`;     
            resultExpand(textResult);
            playerSelection.style.display = "none";
            compSelect.style.display = "none";
            playerSelect.style.display = "none";
            imgPlayerChoice.src = "";
            imgCompChoice.src = "";
        }else if (compScoreResult === 5) {
            playerScoreResult = 0;
            compScoreResult = 0;
            playerSelect.style.display = "none";
            compSelect.style.display = "none";
            paraTextResult.textContent = `You lost to the computer.
            Click Me to Play Again!`; 
            resultExpand(textResult);
            playerSelection.style.display = "none";
            compSelect.style.display = "none";
            playerSelect.style.display = "none";
            imgPlayerChoice.src = "";
            imgCompChoice.src = "";
        }
    });
})



let resultExpand = function(r){
    r.style.fontSize = "3em";
    r.style.height = "4em";
    r.style.width = "10em";
}



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

 let addImage = function(gpc){
    if(gpc === "rock"){
            imgPlayerChoice.src = "images/rock.png";
            playerChoice.appendChild(imgPlayerChoice);
    } else if(gpc === "paper"){
            imgPlayerChoice.src = "images/paper.png"
            playerChoice.appendChild(imgPlayerChoice);  
    }else if(getPlayerChoice ==="scissors"){
            imgPlayerChoice.src = "images/scissors.png"
            playerChoice.appendChild(imgPlayerChoice);   
    }
 }


 playerChoice.appendChild(imgPlayerChoice)
 compChoice.append(paraCompChoice);
 playerChoice.append(paraPlayerChoice);
 textResult.append(paraTextResult);



