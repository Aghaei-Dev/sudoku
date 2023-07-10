export class Sudoku {
  constructor(N, K) {
    this.N = N
    this.K = K

    // N for N*N table
    //K for removing numbers from the table and starting game
    //summary : K uses for detecting level

    this.SRN = Math.floor(Math.sqrt(N))

    //initialize empty-answer-mat(main matrix) with N^2 empty 0 cell
    this.mat = Array.from({ length: N }, () =>
      Array.from({ length: N }, () => {
        return { val: 0, editable: false, conflict: false, mistake: false }
      })
    )
    this.answer = Array.from({ length: N }, () =>
      Array.from({ length: N }, () => 0)
    )
    this.empty = Array.from({ length: N }, () =>
      Array.from({ length: N }, () => 0)
    )
  }

  fillValues() {
    // Fill the diagonal of SRN x SRN matrices
    this.fillDiagonal()
    // Fill remaining blocks
    this.fillRemaining(0, this.SRN)
    this.removeKDigits()
  }
  // Fill the diagonal SRN number of SRN x SRN matrices
  fillDiagonal() {
    for (let i = 0; i < this.N; i += this.SRN) {
      // for diagonal box, start coordinates->i==j
      this.fillBox(i, i)
    }
  }

  // Returns false if given 3 x 3 block contains num.
  unUsedInBox(rowStart, colStart, num) {
    for (let i = 0; i < this.SRN; i++) {
      for (let j = 0; j < this.SRN; j++) {
        if (this.mat[rowStart + i][colStart + j].val === num) {
          return false
        }
      }
    }
    return true
  }

  // Fill a N x N matrix.
  fillBox(row, col) {
    let num = 0
    for (let i = 0; i < this.SRN; i++) {
      for (let j = 0; j < this.SRN; j++) {
        while (true) {
          num = this.randomGenerator(this.N)
          if (this.unUsedInBox(row, col, num)) {
            break
          }
        }
        this.answer[row + i][col + j] = num
        this.mat[row + i][col + j].val = num
      }
    }
  }

  // Random number generator between 1 to N
  randomGenerator(num) {
    return Math.floor(Math.random() * num + 1)
  }

  //check is safe for put number to that cell
  checkIfSafe(i, j, num) {
    return (
      this.unUsedInRow(i, num) &&
      this.unUsedInCol(j, num) &&
      this.unUsedInBox(i - (i % this.SRN), j - (j % this.SRN), num)
    )
  }

  // check row for th number if the number used in row return false
  unUsedInRow(i, num) {
    for (let j = 0; j < this.N; j++) {
      if (this.mat[i][j].val === num) {
        return false
      }
    }
    return true
  }

  // check col for th number if the number used in col return false
  unUsedInCol(j, num) {
    for (let i = 0; i < this.N; i++) {
      if (this.mat[i][j].val === num) {
        return false
      }
    }
    return true
  }

  // A recursive function to fill remaining
  // matrix
  fillRemaining(i, j) {
    // Check if we have reached the end of the matrix
    if (i === this.N - 1 && j === this.N) {
      return true
    }

    // Move to the next row if we have reached the end of the current row
    if (j === this.N) {
      i += 1
      j = 0
    }

    // Skip cells that are already filled
    if (this.mat[i][j].val !== 0) {
      return this.fillRemaining(i, j + 1)
    }

    // Try filling the current cell with a valid value
    for (let num = 1; num <= this.N; num++) {
      if (this.checkIfSafe(i, j, num)) {
        this.mat[i][j].val = num
        this.answer[i][j] = num
        if (this.fillRemaining(i, j + 1)) {
          return true
        }
        this.mat[i][j].val = 0
        this.answer[i][j] = 0
      }
    }

    // No valid value was found, so backtrack
    return false
  }

  //removing K numbers from main mat matrix for starting the game
  removeKDigits() {
    let count = this.K
    while (count !== 0) {
      //i and j are random
      let i = Math.floor(Math.random() * this.N)
      let j = Math.floor(Math.random() * this.N)
      if (this.mat[i][j].val !== 0) {
        count--
        this.mat[i][j].val = 0
        this.mat[i][j].editable = true
      }
    }

    return
  }

  // colMaker() {
  //   let array = []
  //   for (let a = 0; a < 3; a++) {
  //     for (let b = 0; b < 3; b++) {
  //       for (let i = a; i < this.N; i += 3) {
  //         for (let j = b; j < this.N; j += 3) {
  //           array = [...array, this.mat[i][j]]
  //         }
  //       }
  //     }
  //   }
  //   return this.splitArray(array, 9)
  // }
  rowMaker() {
    let array = []
    for (let b = 0; b < 9; b += 3) {
      for (let a = 0; a < 9; a += 3) {
        for (let i = b; i < b + 3; i++) {
          for (let j = a; j < a + 3; j++) {
            array = [...array, this.mat[i][j]]
          }
        }
      }
    }

    return this.splitArray(array, 9)
  }
  rowMakerAnswer() {
    let array = []
    for (let b = 0; b < 9; b += 3) {
      for (let a = 0; a < 9; a += 3) {
        for (let i = b; i < b + 3; i++) {
          for (let j = a; j < a + 3; j++) {
            array = [...array, this.answer[i][j]]
          }
        }
      }
    }
    return this.splitArray(array, 9)
  }

  //split an input array to pieces that have size length
  splitArray(arr, size) {
    let result = []
    for (let i = 0; i < arr.length; i += size) {
      let chunk = arr.slice(i, i + size)
      result.push(chunk)
    }
    return result
  }
}

export const hrefCapitalizer = (href) => {
  if (href.length > 0) {
    document.title = `Sudoku - ${
      href.charAt(0).toUpperCase() + href.slice(1)
    } Level`
  }
}

export const themeChanger = (darkMode, theme, color) => {
  if (darkMode || theme === color) {
    document.documentElement.classList.add(color)
  } else {
    document.documentElement.classList.remove(color)
  }
}
