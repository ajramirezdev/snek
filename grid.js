const grid_size = 21;

export function randomPosition() {
  return {
    x: Math.ceil(Math.random() * grid_size),
    y: Math.ceil(Math.random() * grid_size),
  };
}

export function outsideGrid(position) {
  return (
    position.x > grid_size ||
    position.x < 1 ||
    position.y > grid_size ||
    position.y < 1
  );
}
