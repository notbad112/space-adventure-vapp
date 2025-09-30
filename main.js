const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let ship = { x: canvas.width / 2 - 15, y: canvas.height - 40, w: 30, h: 30, speed: 5 };
let keys = {};

// kontrol keyboard
document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

function drawShip() {
  ctx.fillStyle = "lime";
  ctx.fillRect(ship.x, ship.y, ship.w, ship.h);
}

function update() {
  if (keys["ArrowLeft"] && ship.x > 0) ship.x -= ship.speed;
  if (keys["ArrowRight"] && ship.x + ship.w < canvas.width) ship.x += ship.speed;
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawShip();
  update();
  requestAnimationFrame(gameLoop);
}

gameLoop();

