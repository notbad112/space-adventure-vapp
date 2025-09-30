const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

// Simple spaceship
let x = canvas.width / 2;
let y = canvas.height - 30;

function drawShip() {
  ctx.fillStyle = "lime";
  ctx.fillRect(x - 15, y - 15, 30, 30);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawShip();
  requestAnimationFrame(gameLoop);
}

gameLoop();

