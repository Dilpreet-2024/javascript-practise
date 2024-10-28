const startGameBtn=document.getElementById('start-game-btn');
const ROCK="ROCK";
const PAPER="PAPER";
const  SCISSORS="SCISSORS";
const DEFAULT_USER_CHOICE="ROCK";
let gameIsRunning=false;
const RESULT_DRAW='DRAW';
const RESULT_PLAYER_WINS='PLAYER WINS';
const RESULT_COMPUTER_WINS='COMPUTER WINS'

const getPlayerChoice=()=>{
    const selection=prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`,'').toUpperCase();
    if(selection!==ROCK&& selection!==PAPER && selection!==SCISSORS)
    {
        alert(`Invalid choice, we chose ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE
    }
    return selection;
}
const getComputerChoice=function(){
    const randomValue=Math.random();
    if(randomValue<0.34)
        return ROCK;
    else if(randomValue<0.67)
        return PAPER;
    else
    return  SCISSORS;

}
const getWinner=function(cchoice,pchoice)

{
    if(cchoice===pchoice)
    {
return RESULT_DRAW;
    }
    else if(cchoice===ROCK && pchoice===PAPER ||cchoice===PAPER && pchoice===SCISSORS||cchoice===SCISSORS && pchoice===ROCK)
    {
        return  RESULT_PLAYER_WINS;
    }
    else
    {
        return RESULT_COMPUTER_WINS;
    }
}
startGameBtn.addEventListener('click',function(){
    if(gameIsRunning)
        return;
    gameIsRunning=true;
    console.log("Game is starting");
    const playerSelection=getPlayerChoice();
    const computerSelection=getComputerChoice();
    const winner=getWinner(computerSelection,playerSelection);
    console.log(winner);

});