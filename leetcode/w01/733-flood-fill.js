var floodFill = function(image, sr, sc, newColor) {
  const color = image[sr][sc]
  const stack = [[sr, sc]]

  while (stack.length > 0) {
    const [r, c] = stack.pop()

    if (r >= image.length || r < 0 || c >= image[0].length || c < 0 || image[r][c] !== color) {
      continue;
    }

    image[r][c] = newColor;
    stack.push(
      [r + 1, c],
      [r - 1],
      [r, c + 1],
      [r, c - 1]
    )

  }

  return image

};
console.log(floodFill([[1, 1, 1], [1, 1, 0], [2, 0, 1]], 1, 1, 2), "should equal", [[2, 2, 2], [2, 2, 0], [2, 0, 1]])
