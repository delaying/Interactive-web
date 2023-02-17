const canvas = document.querySelector("canvas");

console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(window.devicePixelRatio);

const canvasWidth = 300;
const canvasHeight = 300;

canvas.style.width = canvasWidth + "px";
canvas.style.height = canvasHeight + "px";

canvas.width = canvasWidth;
canvas.height = canvasHeight;

ctx.fillRect(10, 10, 50, 50);
