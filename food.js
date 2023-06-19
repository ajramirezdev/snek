import { onSnake, expandSnake } from "./snek.js";
import { randomPosition } from "./grid.js";

let food = getRandomFoodPosition();
const exapnsion_rate = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(exapnsion_rate);
    food = getRandomFoodPosition();
  }
}

export function draw(screen) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  screen.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomPosition();
  }
  return newFoodPosition;
}
