const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const score = document.querySelector("#score");
const gameOver = document.querySelector("#game-over");

scoreCount = 0;

let scoreInterval = setInterval(() => {
  score.innerText = scoreCount + 1;
  scoreCount++;
}, 1);

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(() => {
      dino.classList.remove("jump");
    }, 400);
  }
}
let isAlive = setInterval(() => {
  // get dino Y
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  // get cactus x
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  //detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    gameOver.style.display = "flex";
    clearInterval(scoreInterval);
    cactus.style.animation = "none";
  }
}, 10);

document.addEventListener("keydown", (e) => {
  jump();
});
