
let userScore = 0;
let computerScore = 0;

function play() {
let items = ["rock","paper","scissors"];
let computerSelection = items[Math.floor(Math.random()*items.length)];

let userSelection = prompt("Your Selection?").toLowerCase();
let winCon = (computerSelection=="rock" && userSelection=="paper") || (computerSelection=="scissors" && userSelection=="rock") || (computerSelection=="paper" && userSelection=="scissors");

    if (computerSelection===userSelection) {
        alert(`Computer Selection: ${computerSelection},` +" "+ `Player Selection: ${userSelection} : It is a tie`)
    } else if (winCon==true) {
        alert(`Computer Selection: ${computerSelection},` +" "+ `Player Selection: ${userSelection} : You won`)
        userScore++
    } else {
        alert(`Computer Selection: ${computerSelection},` +" "+ `Player Selection: ${userSelection} : You Lose`)
        computerScore++
    }
 
}

for (let i=0; i<5; i++) {
    
    play();

}

console.log(`User Score is:`+" "+`${userScore}`);
console.log(`Computer Score is:`+" "+`${computerScore}`);
if (computerScore>userScore) {
    console.log("Computer Wins") }
    else if (userScore>computerScore) {
        console.log("User Wins")
    } else {
        console.log("It is a tie")
    }
