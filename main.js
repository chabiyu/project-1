const main = () => {};

const startButton = document.querySelector("#start-button");

let timerSpan = document.querySelector("#timer");
let timeCount = 10;
let currentTimeCount;
let allPimples = document.querySelectorAll(".pimple");
let maxPimples = 5;
let currentMax;

function gameInit() {
  manyPimples();
}

const createPimple = function () {
  let newPimple = document.createElement("div");
  newPimple.setAttribute("class", "pimple");
  document.body.appendChild(newPimple);
  newPimple.style.top = 400 - Math.random() * 300 + 300 + "px";
  newPimple.style.left = 400 - Math.random() * 300 + 300 + "px";
};

let manyPimples = function () {
  currentMax = maxPimples;
  for (let i = 0; i < maxPimples; i++) {
    createPimple();
  }
};

//Set up Timer Function

startButton.addEventListener("click", function () {
  startTimer(timeCount);
});

function startTimer(seconds) {
  currentTimeCount = timeCount;
  timerSpan.innerText = "00:0" + timeCount;
  let timer = setInterval(function () {
    seconds -= 1;
    currentTimeCount -= 1;

    timerSpan.innerText = "00:0" + seconds;
  }, 1000);

  setTimeout(function () {
    clearInterval(timer);
  }, seconds * 1000);
}

gameInit();

$(main);
