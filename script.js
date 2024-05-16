// console.log('js intialized');

let userScore=0;
let compScore=0;
let userCount=document.querySelector("#user-score")
let compCount=document.querySelector("#comp-score")

let choices =document.querySelectorAll(".choice")

let msg = document.querySelector("#msg");

const genCompChoice= ()=>{
    const  opt= ["rock","paper", "scissors"]
    let rndIndx=Math.floor(Math.random() * 3);
    return opt[rndIndx]
}

function drawgame(){
    // console.log('Game was a draw');
    msg.innerHTML = "Game Was Draw ! play a again"
    msg.style.backgroundColor="#081b31"
    
}

function showWinner(userWin, userchoice , compChoice){
    if(userWin){
        userScore++
        userCount.innerHTML=userScore
        msg.innerHTML = `You Win! Your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }else{
        compScore++
        compCount.innerHTML=compScore
        msg.innerHTML = `You Loose! ${compChoice} beats Your ${userchoice}`
        msg.style.backgroundColor="red"
        
    }
}

const  playGame = (userchoice)=>{
//  console.log('user choice = ' , userchoice);
 // generating the comp choice
 let compChoice = genCompChoice();
//  console.log('computer choice = '  , compChoice);
 
 if(userchoice === compChoice){
    drawgame()
 } else{
    let userWin= true
    if(userchoice === "rock"){
        userWin = compChoice === "paper" ? false : true
    }else if(userchoice === "paper"){
        // scissors , rock
        userWin= compChoice === "scissors" ? false : true
    }
    else{
        userWin = compChoice=== "rock" ? false : true
    }

    showWinner(userWin , userchoice , compChoice)
 }
  
 
}

choices.forEach((choice)=>{

    let userchoice=choice.getAttribute("id")
    choice.addEventListener("click",()=>{
   playGame(userchoice)


    })
})