const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

let size = 20;
let isPressed = false;
let color = "#cad3f5";
let x, y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;

  console.log("from the cursor: ", x, y);

  drawCirc(x, y);
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCirc(x2, y2);
    drawLine(x, y, x2, y2);
    (x = x2), (y = y2);
  }
});

function drawCirc(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();

  console.log("from the circle: ", x, y);
}
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Starting point
  ctx.lineTo(x2, y2); // Ending point
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// ****************************************************** //
colorEl.addEventListener("change", (e) => (color = e.target.value));

increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) size = 50;
  updateSizeOnScreen();
});
decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) size = 5;
  updateSizeOnScreen();
});

clearEl.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}
