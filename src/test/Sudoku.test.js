import { Sudoku } from '../functions/Sudoku'

const sudoku = new Sudoku(9, 43)
sudoku.fillValues()
sudoku.rowMaker()
sudoku.rowMakerAnswer()

test('should be an [9][9] empty array ', () => {
  const answer = sudoku.empty.flat().find((item) => item !== 0)
  const length = sudoku.answer.flat().length === 81
  expect(answer).toBe(undefined)
  expect(length).toBe(true)
})

test('should be an [9][9] fully numbers and all of them must be grater than 0 ', () => {
  const answer = sudoku.answer.flat().find((item) => item === 0)
  const length = sudoku.answer.flat().length === 81
  expect(answer).toBe(undefined)
  expect(length).toBe(true)
})

test('remove K digits from that 81 numbers in here 43 and editable must be true for zero value', () => {
  let answer = true
  const K = 43
  let counter = K

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku.mat[i][j].val === 0) {
        counter--
        answer = sudoku.mat[i][j].editable
      }
    }
  }
  expect(counter).toBe(0)
  expect(answer).toBe(true)
})

test('check conflict and mistakes all of theme must be false ', () => {
  let mistake = false
  let conflict = false

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      mistake = sudoku.mat[i][j].mistake
      conflict = sudoku.mat[i][j].conflict
    }
  }
  expect(mistake).toBe(false)
  expect(conflict).toBe(false)
})

test('all notes for all cells must be null in the first ', () => {
  let value = 1

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      value = sudoku.mat[i][j].note.find((singleNote) => singleNote !== null)
    }
  }
  expect(value).toBe(undefined)
})


//TODO
expect({ a: 1 }).toHaveProperty('a')
expect({ a: 1 }).toHaveProperty('a', 1)
expect({ a: { b: 1 } }).toHaveProperty('a.b')
expect({ a: 1, b: 2 }).toMatchObject({ a: 1 })
expect({ a: 1, b: 2 }).toMatchObject({
  a: expect.any(Number),
  b: expect.any(Number),
})
expect([{ a: 1 }, { b: 2 }]).toEqual([
  expect.objectContaining({ a: expect.any(Number) }),
  expect.anything(),
])
