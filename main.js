const startButton = document.querySelector("#start-button");
const playAgainButton = document.querySelector("#replay-button");
let timerSpan = document.querySelector("#timer");
let timeCount = 10;
let currentTimeCount;
let allPimples = document.querySelectorAll(".pimple");
let maxPimples = 8;
let currentMax;
let allPopped = document.querySelectorAll(".popped");
let active = true;
let win = false;

function gameInit() {
  playAgainButton.style.display = "none";
  manyPimples();
}

let manyPimples = function () {
  currentMax = maxPimples;
  for (let i = 0; i < maxPimples; i++) {
    createPimple();
  }
};

const createPimple = function () {
  let newPimple = document.createElement("div");
  newPimple.setAttribute("class", "pimple");
  document.body.appendChild(newPimple);
  newPimple.style.top = 400 - Math.random() * 300 + 300 + "px";
  newPimple.style.left = 400 - Math.random() * 300 + 700 + "px";
  active = true;
  win = false;

  newPimple.addEventListener("click", function () {
    newPimple.classList.add("popped");

    setTimeout(() => {
      newPimple.style.display = "none";
      currentMax -= 1;
      if (currentMax === 0 && active) {
        youWon();
      }
    }, 1000);
  });
};

startButton.addEventListener("click", function () {
  startTimer(timeCount);
});

function startTimer(seconds) {
  currentTimeCount = timeCount;
  timerSpan.innerText = "00:" + timeCount;
  let timer = setInterval(function () {
    seconds -= 1;
    currentTimeCount -= 1;
    if (seconds === 0) {
      active = false;
      checkWinLose();
    }

    if (seconds.toString().length === 1) {
      seconds = "0" + seconds;
    }
    if (win === true) {
      clearInterval(timer);
    }

    timerSpan.innerText = "00:" + seconds;
  }, 1000);

  setTimeout(function () {
    clearInterval(timer);
  }, seconds * 1000);
}

function checkWinLose() {
  if (currentMax > 0 && currentTimeCount === 0) {
    youLose();
  }
  gameRestart();
}

function stopTimer() {
  clearInterval(startTimer);
}

function youWon() {
  win = true;
  alert("You won!");
  gameRestart();
}

function youLose() {
  stopTimer();
  alert("You Lose!");
}

function gameRestart() {
  playAgainButton.style.display = "block";
  startButton.style.display = "none";
}

function clearPimples() {
  allPimples = document.querySelectorAll(".pimple");
  for (let i = 0; i < allPimples.length; i++) {
    allPimples[i].remove();
  }
}

playAgainButton.addEventListener("click", function () {
  clearPimples();
  gameInit();
  startTimer(timeCount);
});

gameInit();
