let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".Rocks");
let youscore=document.querySelector("#userScore");
let computerscore=document.querySelector("#compScore");
let msg=document.querySelector(".msg");
let reset=document.querySelector(".icon");

reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    youscore.innerText=userScore;
    computerscore.innerText=compScore;
    msg.innerText=`Ok Lets Start Game Again!`;
    

})

const getComputerChoice=()=>{
    const gameOptions=["rock","paper","scissor"];
    const value=gameOptions[Math.floor(Math.random()*3)];
    return value;
}

const gameDraw=()=>{
    msg.innerText="Game Draw. Play Again!";
}

const showWinner=(winner,userChoice,computerChoice)=>{
    if(winner){
        userScore++;
        msg.innerText=`You Win! ${userChoice} beats ${computerChoice}`
        youscore.innerText=userScore
    }
    else{
        compScore++;
        msg.innerText=`Computer win! ${computerChoice} beats ${userChoice}`;
        computerscore.innerText=compScore
    }
}

const gamePlay=(userChoice)=>{
    let computerChoice=getComputerChoice();
    console.log(computerChoice,userChoice);
    if(computerChoice == userChoice){
        gameDraw();
    }else{
        let userWin=true;
        if(userChoice =="rock"){
            userWin=computerChoice==='paper'?false:true;
        }else if(userChoice === "paper"){
            userWin=computerChoice==='scissor'?false:true;
        }else{
            userWin=computerChoice==='rock'?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        gamePlay(choice.id);
    })
})