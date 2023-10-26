const character = document.getElementById("character");
const game_over = document.getElementById("game-over");

let isGameOver = false;

function moveCharacterRight() {
  if (!isGameOver) {
    const characterX = character.offsetLeft;
    if (characterX < window.innerWidth - character.offsetWidth) {
      character.style.left = characterX + 5 + "px";
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveCharacterRight();
  }
});

function checkCollision() {
  const characterRect = character.getBoundingClientRect();
  const groundRect = ground.getBoundingClientRect();

  if (characterRect.bottom >= groundRect.top) {
    isGameOver = true;
    game_over.style.display = "block";
  }
}

function gameLoop() {
  checkCollision();
  requestAnimationFrame(gameLoop);
}

gameLoop();