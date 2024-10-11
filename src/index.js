function knightMoves(start, end) {
  // Possible moves a knight can make
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  // Helper function to check if position is on the board
  function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // BFS initialization
  const queue = [[start]]; // Start with the initial path
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    // If we reach the end, return the path
    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((pos) => console.log(pos));
      return path;
    }

    // Explore each possible move
    for (let [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValidMove(newX, newY)) {
        const newPos = [newX, newY];
        if (!visited.has(newPos.toString())) {
          visited.add(newPos.toString());
          queue.push([...path, newPos]);
        }
      }
    }
  }
}

// Example usage
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
