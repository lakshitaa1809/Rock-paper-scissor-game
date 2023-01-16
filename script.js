"use strict";
let mainpage = document.getElementById("mainpage");
let gamepage = document.getElementById("gamepage");
let playnow = document.getElementById("playnow");
let buttons = document.querySelectorAll(".buttons");
let rockbtn = document.getElementById("ROCK");
let paperbtn = document.getElementById("PAPER");
let scissorbtn = document.getElementById("SCISSOR");
let trybtn = document.getElementById("tryagain");
let startbtn = document.getElementById("start");
gamepage.style.display = "none";
mainpage.style.display = "block";
playnow.addEventListener("click", () => {
  gamepage.style.display = "block";
  mainpage.style.visibility = "hidden";
});
/*startbtn.addEventListener("click", () => {
  alert("GAME STARTS...IT'S 10 TURNS...GO..");
});*/

let player,
  computer,
  finalist,
  score = 0,
  comp_score = 0,
  round = 0;
const computer_choice = ["PAPER", "ROCK", "SCISSOR"];
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    player = e.target.id;
    let choice = Math.floor(Math.random() * 3);
    computer = computer_choice[choice];
    round++;
    finalist = winner();
    if (finalist === "PLAYER") {
      score++;
    } else if (finalist == "COMPUTER") {
      comp_score++;
    }
    console.log(player, computer, finalist, score, comp_score, round);
    document.getElementById("totround").innerText = "TOTAL TURNS :10";
    document.getElementById("round").innerText = "TURN -" + round;
    document.getElementById("playerchoice").innerText =
      "PLAYER CHOICE:" + player;
    document.getElementById("computerchoice").innerText =
      "COMPUTER CHOICE:" + computer;
    document.getElementById("res").innerText = "PLAYER SCORE:" + score;
    document.getElementById("compres").innerText =
      "COMPUTER SCORE:" + comp_score;
    if (round > 10) {
      if (score === comp_score) {
        alert("DRAW");
      } else if (score > comp_score) {
        alert("PLAYER WINS");
      } else {
        alert("COMPUTER WINS");
      }
      alert("GAME OVER...TRY AGAIN..");
    }
  })
);
trybtn.addEventListener("click", () => {
  gamepage.style.display = "none";
  mainpage.style.display = "block";
});

function winner() {
  if (player === computer) {
    return "DRAW";
  } else if (player === "PAPER") {
    if (computer === "ROCK") {
      return "PLAYER";
    }
    return "COMPUTER";
  } else if (player === "SCISSOR") {
    if (computer === "PAPER") {
      return "PLAYER";
    }
    return "COMPUTER";
  } else if (player === "ROCK") {
    if (computer === "SCISSOR") {
      return "PLAYER";
    }
    return "COMPUTER";
  }
}
