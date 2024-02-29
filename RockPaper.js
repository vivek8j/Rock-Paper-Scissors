let userScore = 0;
let compScore = 0;

let name = null;

while (name === null || name === "") {
  name = prompt("Enter you Name");
}

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//reset and load a new game
let newgame = document.querySelector("#new-game");
let rset = document.querySelector("#btn");

//name of user
let uname = document.querySelector("#name");
let cname = document.querySelector("#compname");

uname.innerText = name;

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    uname.style.color = "green";
    userScorePara.style.color = "green";

    userScorePara.style.fontWeight = "700";
    uname.style.fontWeight = "700";

    compScorePara.style.color = "black";
    cname.style.color = "black";

    compScorePara.style.fontWeight = "100";
    cname.style.fontWeight = "100";

    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

    // let audio = new Audio("celebrate.mp3");
    // audio.play();
  } else {
    compScore++;
    compScorePara.innerText = compScore;

    compScorePara.style.color = "red";
    cname.style.color = "red";

    compScorePara.style.fontWeight = "700";
    cname.style.fontWeight = "700";

    uname.style.color = "black";
    userScorePara.style.color = "black";

    userScorePara.style.fontWeight = "100";
    uname.style.fontWeight = "100";

    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const NewGame = () => {
  location.reload();
};

newgame.addEventListener("click", NewGame);

const resetGame = () => {
  compScorePara.innerText = 0;
  userScorePara.innerText = 0;

  userScore = 0;
  compScore = 0;
  msg.innerText = `Play your move`;

  compScorePara.style.color = "black";
  cname.style.color = "back";

  compScorePara.style.fontWeight = "100";
  cname.style.fontWeight = "100";

  uname.style.color = "black";
  userScorePara.style.color = "black";

  userScorePara.style.fontWeight = "100";
  uname.style.fontWeight = "100";
};
rset.addEventListener("click", resetGame);
