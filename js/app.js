// Global Scores
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let inGame = true;
// Buttons

const btnRoll = document.querySelector(".roll-dice");
const btnHold = document.querySelector(".hold");
const btnNew = document.querySelector(".new-game");

// Scores

let score = document.getElementById("score-" + activePlayer);

// Point i.e round score

let point = document.getElementById("point-" + activePlayer);

// Random Number Generator

let dice = Math.floor(Math.random() * 6 + 1);

// Eventlistners

btnRoll.addEventListener("click", () => {
  if (scores[0] >= 100 || scores[1] >= 100) {
    return;
  }

  dice = Math.floor(Math.random() * 6 + 1);
  currentScore += dice;

  document.querySelector('.dice__icon').setAttribute("src","img/dice-" + dice + ".png");

  if (dice === 1) {
    currentScore = 0;
    point.innerText = currentScore;

    document
      .getElementById("active-" + activePlayer)
      .classList.remove("active");

    activePlayer = activePlayer === 0 ? 1 : 0;
    point = document.getElementById("point-" + activePlayer);

    document.getElementById("active-" + activePlayer).classList.add("active");
  } else {
    point.innerText = currentScore;
  }
});

/////////////////////////
// btn hold event listner

btnHold.addEventListener("click", () => {
  scores[activePlayer] += currentScore;
  currentScore = 0;

  point.innerText = currentScore;

  score = document.getElementById("score-" + activePlayer);
  score.innerHTML = scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).textContent =
      "Player " + (activePlayer + 1) + " Wins";
    document.getElementById("name-" + activePlayer).classList.add("active");
    inGame = false;

    return;
  }

  document.getElementById("active-" + activePlayer).classList.remove("active");

  activePlayer = activePlayer === 0 ? 1 : 0;
  point = document.getElementById("point-" + activePlayer);
  document.getElementById("active-" + activePlayer).classList.add("active");
});

///////////////////////////////
// New game eventlistner

btnNew.addEventListener("click", () => {
  scores = [0, 0];
  currentScore = 0;
  inGame = true;
  activePlayer = 0;

  point = document.getElementById("point-" + activePlayer);

  document.getElementById("point-0").textContent = 0;
  document.getElementById("point-1").textContent = 0;

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.getElementById("name-0").classList.remove("active");
  document.getElementById("name-1").classList.remove("active");

  document.getElementById("active-0").classList.remove("active");
  document.getElementById("active-1").classList.remove("active");

  document.getElementById("active-0").classList.add("active");

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
});
