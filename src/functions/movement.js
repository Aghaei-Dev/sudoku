export const safeColSquare = (square) => {
  if (square < 0) return square + 3
  if (square > 8) return square - 3

  return square
}

export const safeRowSquare = (dir, square) => {
  if (dir === 'left') {
    if (square > 0) return square - 1
  }
  if (dir === 'right') {
    if (square < 9) return square + 1
  }
}
