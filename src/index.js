// eslint-disable-next-line no-unused-vars
import css from "./index.css";
import { FOUR } from "./tesseract";

const canvas = document.getElementById("tesseract");
const canvasSize = Math.min(window.innerWidth, window.innerHeight);
canvas.width = canvasSize;
canvas.height = canvasSize;

window.addEventListener("resize", () => {
  const min = Math.min(window.innerWidth, window.innerHeight);
  canvas.width = min;
  canvas.height = min;
});

const ctx = canvas.getContext("2d");

const Tesseract = FOUR.create4DCube();
let wAngle = 0;
const wDelta = 0.003;
let camAngle = 0;

setInterval(() => {
  FOUR.update3DMap(Tesseract, wAngle, 3);
  const matrix = FOUR.getCenteringMatrix([
    0,
    Math.cos(camAngle),
    Math.sin(camAngle),
  ]);
  FOUR.update2DMap(Tesseract, matrix, 3.7);
  FOUR.drawCube(ctx, canvas, Tesseract);
  wAngle += wDelta;
}, 16);

const navBar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const navY = navBar.getBoundingClientRect().y;
  console.log(navY);
  if (navY <= 10) {
    navBar.classList.add("sticky-true");
  } else {
    navBar.classList.remove("sticky-true");
  }
});