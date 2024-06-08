let userscore=0;
let compscore=0;

const choices=document.querySelectorAll('.choice');

const msg=document.querySelector('#msg');

const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options = ["rock", "paper", "scissors"];
    const rnd = Math.floor(Math.random() * 3);
    return options [rnd] ;
}
const draw=()=>{
    console.log("its a draw");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="rgb(27, 71, 99)";
}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        console.log("you win");
        userscore++;
        console.log(userscore);
        userscorePara.innerText=userscore;
        msg.innerText=`You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        compscore++;
        console.log(compscore);
        compscorePara.innerText=compscore;
        msg.innerText=`You Lose! ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}


const playGame =(userChoice)=>{
    console.log(`user choice is ${userChoice}`);
    const computerChoice=genCompChoice();
    console.log(`comp choice is ${computerChoice}`);

    if(userChoice===computerChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //comp:scissors,paper
            computerChoice==="paper" ? true : false;
        }
         else if(userChoice=== "paper") {
        //rock, scissors
        userWin = computerChoice ==="scissors" ? false: true;
        }
        else{
            //rock, paper
            userWin = computerChoice ==="rock" ? false: true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener('click', ()=>{
        const userChoice=choice.getAttribute('id');
        // console.log(`${userChoice} was clicked`);
        playGame(userChoice);

        
    });
});
