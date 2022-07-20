const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");
const resultDisp = document.querySelector(".results");
const winResult = document.createElement("p");
const overallResult = document.createElement("p");
const overallResultLine2 = document.createElement("p");
const roundTable = document.createElement("p");
const resetButton = document.createElement("button");
const para = resetButton.textContent ="Play Again";
winResult.style.fontSize="36px"
roundTable.style.fontSize="36px"
overallResult.style.fontSize="36px"
overallResultLine2.style.fontSize="36px"
resetButton.style.fontSize="36px"
winResult.style.backgroundColor="beige"
roundTable.style.backgroundColor="beige"
overallResult.style.backgroundColor="beige"
overallResultLine2.style.backgroundColor="beige"
resetButton.style.backgroundColor="#FF6347"




function playAgain () {
    resultDisp.removeChild(overallResult);
    resultDisp.removeChild(overallResultLine2);
    resultDisp.removeChild(resetButton);
    
    rockBtn.addEventListener("click",playRock);
    scissorsBtn.addEventListener("click",playScissors);
    paperBtn.addEventListener("click",playPaper);
    
    userScore = 0;
    computerScore = 0;
    round = 0;
} 

resetButton.addEventListener("click",playAgain);


let userScore = 0;
let computerScore = 0;
let round =0;



function playRock() {

    
    

   round++

    

let userSelection = "rock"
let items = ["rock","paper","scissors"];
let computerSelection = items[Math.floor(Math.random()*items.length)];


let winCon = (computerSelection=="rock" && userSelection=="paper") || (computerSelection=="scissors" && userSelection=="rock") || (computerSelection=="paper" && userSelection=="scissors");

    if (computerSelection===userSelection) {
        roundTable.textContent= `Round: ${round}`
        resultDisp.appendChild(roundTable);
        winResult.textContent = `It\'s a tie`+` `+`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
        resultDisp.appendChild(winResult);
    } else if (winCon==true) {
        userScore++
        if (userScore==5 || computerScore==5) {
            if (userScore>computerScore) {
                overallResult.textContent = "Well Done!"
                overallResult.style.backgroundColor="#00FF7F"

                overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                resultDisp.appendChild(overallResult);
                resultDisp.appendChild(overallResultLine2);
                resultDisp.appendChild(resetButton);
                resultDisp.removeChild(winResult);
                resultDisp.removeChild(roundTable);
                rockBtn.removeEventListener("click",playRock);
                scissorsBtn.removeEventListener("click",playScissors);
                paperBtn.removeEventListener("click",playPaper);
            } else {
                overallResult.textContent = "Game Over!"
                overallResult.style.backgroundColor="red"
                overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                resultDisp.appendChild(overallResult);
                resultDisp.appendChild(overallResultLine2);
                resultDisp.appendChild(resetButton);
                resultDisp.removeChild(winResult);
                resultDisp.removeChild(roundTable);
                rockBtn.removeEventListener("click",playRock);
                scissorsBtn.removeEventListener("click",playScissors);
                paperBtn.removeEventListener("click",playPaper);
            }
        } else {
        roundTable.textContent= `Round: ${round}`
        resultDisp.appendChild(roundTable);
        winResult.textContent = `You Won`+` `+`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
        resultDisp.appendChild(winResult);
    }
    } else {
        computerScore++
        if (userScore==5 || computerScore==5) {
            if (userScore>computerScore) {
                overallResult.textContent = "Well Done!"
                overallResult.style.backgroundColor="#00FF7F"

                overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                resultDisp.appendChild(overallResult);
                resultDisp.appendChild(overallResultLine2);
                resultDisp.appendChild(resetButton);
                resultDisp.removeChild(winResult);
                resultDisp.removeChild(roundTable);
                rockBtn.removeEventListener("click",playRock);
                scissorsBtn.removeEventListener("click",playScissors);
                paperBtn.removeEventListener("click",playPaper);
            } else {
                overallResult.textContent = "Game Over!"
                overallResult.style.backgroundColor="red"
                overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                resultDisp.appendChild(overallResult);
                resultDisp.appendChild(overallResultLine2);
                resultDisp.appendChild(resetButton);
                resultDisp.removeChild(winResult);
                resultDisp.removeChild(roundTable);
                rockBtn.removeEventListener("click",playRock);
                scissorsBtn.removeEventListener("click",playScissors);
                paperBtn.removeEventListener("click",playPaper);
            }
        } else {
        roundTable.textContent= `Round: ${round}`
        resultDisp.appendChild(roundTable);
        winResult.textContent = `You Lose`+` `+`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
        resultDisp.appendChild(winResult);
        }
    }
 
}

function playScissors() {

    
    round++

    

    let userSelection = "scissors"
    let items = ["rock","paper","scissors"];
    let computerSelection = items[Math.floor(Math.random()*items.length)];
    
    
    let winCon = (computerSelection=="rock" && userSelection=="paper") || (computerSelection=="scissors" && userSelection=="rock") || (computerSelection=="paper" && userSelection=="scissors");
    
        if (computerSelection===userSelection) {
            roundTable.textContent= `Round: ${round}`
            resultDisp.appendChild(roundTable);
            winResult.textContent = `It\'s a tie`+` `+`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
            resultDisp.appendChild(winResult);
        } else if (winCon==true) {
            userScore++
            if (userScore==5 || computerScore==5) {
                if (userScore>computerScore) {
                    overallResult.textContent = "Well Done!"
                    overallResult.style.backgroundColor="#00FF7F"

                    overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                    resultDisp.appendChild(overallResult);
                    resultDisp.appendChild(overallResultLine2);
                    resultDisp.appendChild(resetButton);
                    resultDisp.removeChild(winResult);
                    resultDisp.removeChild(roundTable);
                    rockBtn.removeEventListener("click",playRock);
                    scissorsBtn.removeEventListener("click",playScissors);
                    paperBtn.removeEventListener("click",playPaper);
                } else {
                    overallResult.textContent = "Game Over!"
                    overallResult.style.backgroundColor="red"
                    overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                    resultDisp.appendChild(overallResult);
                    resultDisp.appendChild(overallResultLine2);
                    resultDisp.appendChild(resetButton);
                    resultDisp.removeChild(winResult);
                    resultDisp.removeChild(roundTable);
                    rockBtn.removeEventListener("click",playRock);
                    scissorsBtn.removeEventListener("click",playScissors);
                    paperBtn.removeEventListener("click",playPaper);
                }
            } else {
                roundTable.textContent= `Round: ${round}`
                resultDisp.appendChild(roundTable);
                winResult.textContent = `You Won`+` `+`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                resultDisp.appendChild(winResult);
            }
        } else {
           
            computerScore++
            if (userScore==5 || computerScore==5) {
                if (userScore>computerScore) {
                    overallResult.textContent = "Well Done!"
                    overallResult.style.backgroundColor="#00FF7F"

                    overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                    resultDisp.appendChild(overallResult);
                    resultDisp.appendChild(overallResultLine2);
                    resultDisp.appendChild(resetButton);
                    resultDisp.removeChild(winResult);
                    resultDisp.removeChild(roundTable);
                    rockBtn.removeEventListener("click",playRock);
                    scissorsBtn.removeEventListener("click",playScissors);
                    paperBtn.removeEventListener("click",playPaper);
                } else {
                    overallResult.textContent = "Game Over!"
                    overallResult.style.backgroundColor="red"
                    overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                    resultDisp.appendChild(overallResult);
                    resultDisp.appendChild(overallResultLine2);
                    resultDisp.appendChild(resetButton);
                    resultDisp.removeChild(winResult);
                    resultDisp.removeChild(roundTable);
                    rockBtn.removeEventListener("click",playRock);
                    scissorsBtn.removeEventListener("click",playScissors);
                    paperBtn.removeEventListener("click",playPaper);
                }
            } else {
                roundTable.textContent= `Round: ${round}`
                resultDisp.appendChild(roundTable);
                winResult.textContent = `You Lose`+` `+`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                resultDisp.appendChild(winResult);
            }
        } 
        
        
    }

function playPaper() {

   

    round++

    

    let userSelection = "paper"
    let items = ["rock","paper","scissors"];
    let computerSelection = items[Math.floor(Math.random()*items.length)];
    
    
    let winCon = (computerSelection=="rock" && userSelection=="paper") || (computerSelection=="scissors" && userSelection=="rock") || (computerSelection=="paper" && userSelection=="scissors");
    
        if (computerSelection===userSelection) {
            roundTable.textContent= `Round: ${round}`
            resultDisp.appendChild(roundTable);
            winResult.textContent = `It\'s a tie`+` `+`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
            resultDisp.appendChild(winResult);
        } else if (winCon==true) {
            
            userScore++
            if (userScore==5 || computerScore==5) {
                if (userScore>computerScore) {
                    overallResult.textContent = "Well Done!"
                    overallResult.style.backgroundColor="#00FF7F"

                    overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                    resultDisp.appendChild(overallResult);
                    resultDisp.appendChild(overallResultLine2);
                    resultDisp.appendChild(resetButton);
                    resultDisp.removeChild(winResult);
                    resultDisp.removeChild(roundTable);
                    rockBtn.removeEventListener("click",playRock);
                    scissorsBtn.removeEventListener("click",playScissors);
                    paperBtn.removeEventListener("click",playPaper);
                } else {
                    overallResult.textContent = "Game Over!"
                    overallResult.style.backgroundColor="red"
                    overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                    resultDisp.appendChild(overallResult);
                    resultDisp.appendChild(overallResultLine2);
                    resultDisp.appendChild(resetButton);
                    resultDisp.removeChild(winResult);
                    resultDisp.removeChild(roundTable);
                    rockBtn.removeEventListener("click",playRock);
                    scissorsBtn.removeEventListener("click",playScissors);
                    paperBtn.removeEventListener("click",playPaper);
                }
            } else {
                roundTable.textContent= `Round: ${round}`
                resultDisp.appendChild(roundTable);
                winResult.textContent = `You Won`+` `+`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                resultDisp.appendChild(winResult);
            }
        } else {
            
            computerScore++
            if (userScore==5 || computerScore==5) {
                if (userScore>computerScore) {
                    overallResult.textContent = "Well Done!"
                    overallResult.style.backgroundColor="#00FF7F"

                    overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                    resultDisp.appendChild(overallResult);
                    resultDisp.appendChild(overallResultLine2);
                    resultDisp.appendChild(resetButton);
                    resultDisp.removeChild(winResult);
                    resultDisp.removeChild(roundTable);
                    rockBtn.removeEventListener("click",playRock);
                    scissorsBtn.removeEventListener("click",playScissors);
                    paperBtn.removeEventListener("click",playPaper);
                } else {
                    overallResult.textContent = "Game Over!"
                    overallResult.style.backgroundColor="red"
                    overallResultLine2.textContent=`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                    resultDisp.appendChild(overallResult);
                    resultDisp.appendChild(overallResultLine2);
                    resultDisp.appendChild(resetButton);
                    resultDisp.removeChild(winResult);
                    resultDisp.removeChild(roundTable);
                    rockBtn.removeEventListener("click",playRock);
                    scissorsBtn.removeEventListener("click",playScissors);
                    paperBtn.removeEventListener("click",playPaper);
                }
            } else {
                roundTable.textContent= `Round: ${round}`
                resultDisp.appendChild(roundTable);
                winResult.textContent = `You Lose`+` `+`User Score: ${userScore}`+` `+`Computer Score: ${computerScore}`
                resultDisp.appendChild(winResult);
            }
        }
        
    }







rockBtn.addEventListener("click",playRock);
scissorsBtn.addEventListener("click",playScissors);
paperBtn.addEventListener("click",playPaper);

