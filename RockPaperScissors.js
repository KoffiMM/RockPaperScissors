let playerScore=0;
let computerScore=0;
let tie=0;
let result=document.querySelector(".result");
let score=document.querySelector(".score");

function computerPlay() {
    switch (
      Math.floor(Math.random() * 3) //Random int from scaling for 3 choices
    ) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
      default:
        alert("Something went wrong!");
    }
}

function playRound(playerSelection, computerSelection=computerPlay()){
    let player=playerSelection;
    const computer=computerSelection;
    player=prompt("Enter your choice");
    if(player==computer){
    result.textContent=`Tie Game`
    tie++;
}
else if((player == "scissors"&& computer == "paper"  ) ||
(player == "paper"&&computer == "rock" ) ||
(player=="rock"&&computer=="scissors")
)
{
    result.textContent=`You win ${player} beats ${computer}`
    playerScore++;
}
else
{
     result.textContent=`You lose ${computer} beats ${player}`
     computerScore++
}

}

function game(){
    for(let i=1; i<=5; i++){
       playRound()
    }
    if(playerScore==5){
        score.textContent="Player wins!!"

    }
    else if(computerScore==5){
        score.textContent="Computer wins :("
    }
    else{
        score.textContent="It's a tie!"
    }
   
}
game()
