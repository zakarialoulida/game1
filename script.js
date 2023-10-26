const character = document.getElementById("character");

let isJumping = false;

document.addEventListener("keydown", jump);

function jump(event) {
  if (event.key === " " && !isJumping) {
    isJumping = true;

    let position = 220;

    const jumpUp = () => {
      if (position <= 620) {
        position += 10;
        character.style.bottom = position + "px";
      } else {
        clearInterval(jumpInterval);

        const fallDown = () => {
          if (position > 220) {
            position -= 10;
            character.style.bottom = position + "px";
          } else {
            isJumping = false;
          }
        };

        const fallInterval = setInterval(fallDown, 20);
      }
    };

    const jumpInterval = setInterval(jumpUp, 20);
  }
}


function moveObstacle() {
    let obstacle = document.querySelector(".obstacle");
    let obstaclePosition = window.innerWidth; 
    let obstacleSpeed = 10; 
  
    const move = () => {
      if (obstaclePosition > 50) { 
        obstaclePosition -= obstacleSpeed;
        obstacle.style.left = obstaclePosition + "px";
      } else {
        obstaclePosition = window.innerWidth; 
      }
  
      
      if (
        obstaclePosition > 0 &&
        obstaclePosition < 50 &&
        character.style.bottom === "220px"
      ) {
        alert("Game Over!"); 
      }
    };
  
    const obstacleInterval = setInterval(move, 25); 
  }
  
  moveObstacle();
  