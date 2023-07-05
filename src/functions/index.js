export class Sudoku {
  // Constructor

  constructor(N, K) {
    this.N = N
    this.K = K

    // برای اینکه جدول چند در چند باشد
    // محاسبه ریشه ان و رند کردن ان ب کف/اعشار نداشته باشیم

    this.SRN = Math.floor(Math.sqrt(N))

    //در ابتدا تمام خانه های جواب و سوال با صفر(خالی) پر میشود
    this.mat = Array.from(
      {
        length: N,
      },
      () =>
        Array.from(
          {
            length: N,
          },
          () => 0
        )
    )
    this.answer = Array.from(
      {
        length: N,
      },
      () =>
        Array.from(
          {
            length: N,
          },
          () => 0
        )
    )
    this.empty = Array.from(
      {
        length: N,
      },
      () =>
        Array.from(
          {
            length: N,
          },
          () => 0
        )
    )
  }
  // سازنده سودوکو
  fillValues() {
    // Fill the diagonal of SRN x SRN matrices
    this.fillDiagonal()
    // Fill remaining blocks
    this.fillRemaining(0, this.SRN)

    //در ابتدا همه ی خانه ها پر میشوند سپس با این فانک کا رفم پاک میشوند
    this.removeKDigits()
  }
  //قطر
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
        if (this.mat[rowStart + i][colStart + j] === num) {
          return false
        }
      }
    }
    return true
  }

  // Fill a 3 x 3 matrix.
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
        this.mat[row + i][col + j] = num
      }
    }
  }

  // Random generator
  randomGenerator(num) {
    return Math.floor(Math.random() * num + 1)
  }

  // Check if safe to put in cell
  checkIfSafe(i, j, num) {
    return (
      this.unUsedInRow(i, num) &&
      this.unUsedInCol(j, num) &&
      this.unUsedInBox(i - (i % this.SRN), j - (j % this.SRN), num)
    )
  }

  // check in the row for existence
  unUsedInRow(i, num) {
    for (let j = 0; j < this.N; j++) {
      if (this.mat[i][j] === num) {
        return false
      }
    }
    return true
  }

  // check in the row for existence
  unUsedInCol(j, num) {
    for (let i = 0; i < this.N; i++) {
      if (this.mat[i][j] === num) {
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
    if (this.mat[i][j] !== 0) {
      return this.fillRemaining(i, j + 1)
    }

    // Try filling the current cell with a valid value
    for (let num = 1; num <= this.N; num++) {
      if (this.checkIfSafe(i, j, num)) {
        this.mat[i][j] = num
        this.answer[i][j] = num
        if (this.fillRemaining(i, j + 1)) {
          return true
        }
        this.mat[i][j] = 0
        this.answer[i][j] = 0
      }
    }

    // No valid value was found, so backtrack
    return false
  }

  //پرینت سودوکو به همراه حذفیات
  printSudoku() {
    const array = []

    for (let i = 0; i < this.N; i++) {
      array.push(this.mat[i])
    }
    return array
  }

  //پرینت سودوکو به بدون حذفیات
  //به صورت کامل برای مقایسه با جواب کاربر
  printAnswer() {
    const array = []

    for (let i = 0; i < this.N; i++) {
      array.push(this.answer[i])
    }
    return array
  }

  //پاک کردن کا عدد از جدول برای شروع بازی
  removeKDigits() {
    let count = this.K
    while (count !== 0) {
      //استخراج ای و جی به صورت تصادفی
      let i = Math.floor(Math.random() * this.N)
      let j = Math.floor(Math.random() * this.N)
      if (this.mat[i][j] !== 0) {
        count--
        this.mat[i][j] = 0
      }
    }

    return
  }
}

//k
//easy -- 43
//medium -- 61
//hard -- 66
// expert -- 68
// evil -- 68

export const saveLocal = (key) => {
  let isKeyExist = localStorage.getItem(`${key}`)
  if (isKeyExist) {
    return JSON.parse(localStorage.getItem(`${key}`))
  } else {
    return ''
  }
}
