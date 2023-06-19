import {
  update as updateSnake,
  draw as drawSnake,
  snake_speed,
  getSnakeHead,
  snakeIntersection,
} from "./snek.js";

import { update as updateFood, draw as drawFood } from "./food.js";

import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const screen = document.querySelector("#nokia-screen");

function main(currentTime) {
  if (gameOver) {
    window.location = "/";
  }

  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / snake_speed) {
    return;
  }

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  screen.innerHTML = "";
  drawSnake(screen);
  drawFood(screen);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
