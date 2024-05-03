let yourmarks = 0;
let compmarks = 0;

const games = document.querySelectorAll(".game");
const msg = document.querySelector("#move");
let yourmarkspara = document.querySelector("#yourmarks");
let compmarkspara = document.querySelector("#compmarks");


const showwinner = (userwin) =>
    {
        if(userwin){yourmarks++;
            yourmarkspara.innerText = yourmarks;
            msg.innerText = "You Win";
            document.getElementById("play").style.backgroundColor = "green"; 
        }
        else{compmarks++;
            compmarkspara.innerText = compmarks;
        msg.innerText = "You Loss";
        document.getElementById("play").style.backgroundColor = "red";
        }
    }

const drawgame = () =>
    {
        console.log("game is draw");
        msg.innerText = "Game Was Draw";
        document.getElementById("play").style.backgroundColor = "rgb(30, 48, 49)";
    }

const gencompchoice = () =>
    {
        const options = ["rock" ,"paper","scisser"];
        const randindx = Math.floor(Math.random() * 3);
        return options[randindx];
    }

const playgame = (userchoice) =>
    {
        console.log("user choice is ", userchoice);
        const compchoice = gencompchoice();
        console.log("computer choice is",compchoice);
        if(userchoice === compchoice)
            {
                drawgame();
            }else
            {
                let userwin = true;
                if(userchoice === "rock")
                    {
                        userwin = compchoice === "paper" ? false : true;
                    }else if(userchoice === "paper"){
                        userwin = compchoice === "scisser" ? false : true;
                    }
                    else{
                        userwin = compchoice === "rock" ? false : true;
                    }
                    showwinner(userwin);
            }
    }

games.forEach((game) =>
{
    game.addEventListener("click", () =>
    {
        const userchoice = game.getAttribute("id");
        playgame(userchoice);
    });
});