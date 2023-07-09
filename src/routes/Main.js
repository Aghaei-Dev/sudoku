import React from 'react'
import { TextTitle } from '../components'
import { styled } from '@mui/material/styles'
import { rule2, rule4 } from '../assets/images'
const Main = () => {
  return (
    <Wrapper>
      <h1>how to play sudoku ?</h1>
      {/* one */}
      <TextTitle title='Sudoku Rule № 1: Use Numbers 1-9' />
      <p>
        Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns
        are 9 “squares” (made up of 3 x 3 spaces). Each row, column and square
        (9 spaces each) needs to be filled out with the numbers 1-9, without
        repeating any numbers within the row, column or square. Does it sound
        complicated? As you can see from the image below of an actual Sudoku
        grid, each Sudoku grid comes with a few spaces already filled in; the
        more spaces filled in, the easier the game – the more difficult Sudoku
        puzzles have very few spaces that are already filled in.
      </p>
      {/* two */}
      <TextTitle title='Sudoku Rule № 2: Don’t Repeat Any Numbers' />
      <img src={rule2} alt='rule2' />
      <p>
        As you can see, in the upper left square (circled in blue), this square
        already has 7 out of the 9 spaces filled in. The only numbers missing
        from the square are 5 and 6. By seeing which numbers are missing from
        each square, row, or column, we can use process of elimination and
        deductive reasoning to decide which numbers need to go in each blank
        space.
        <br />
        <br />
        For example, in the upper left square, we know we need to add a 5 and a
        6 to be able to complete the square, but based on the neighboring rows
        and squares we cannot clearly deduce which number to add in which space.
        This means that we should ignore the upper left square for now, and try
        to fill in spaces in some other areas of the grid instead.
      </p>
      {/* three */}
      <TextTitle title='Sudoku Rule № 3: Don’t Guess' />
      <p>
        Sudoku is a game of logic and reasoning, so you shouldn’t have to guess.
        If you don’t know what number to put in a certain space, keep scanning
        the other areas of the grid until you seen an opportunity to place a
        number. But don’t try to “force” anything – Sudoku rewards patience,
        insights, and recognition of patterns, not blind luck or guessing.
      </p>
      {/* four */}
      <TextTitle title='Sudoku Rule № 4: Use Process of Elimination' />
      <p className='last'>
        What do we mean by using “process of elimination” to play Sudoku? Here
        is an example. In this Sudoku grid (shown below), the far left-hand
        vertical column (circled in Blue) is missing only a few numbers: 1, 5
        and 6.
        <br />
        <br />
        One way to figure out which numbers can go in each space is to use
        “process of elimination” by checking to see which other numbers are
        already included within each square – since there can be no duplication
        of numbers 1-9 within each square (or row or column).
      </p>
      <img src={rule4} alt='rule4' />
      <p className='last'>
        How to solve sudoku puzzles? In this case, we can quickly notice that
        there are already number 1s in the top left and center left squares of
        the grid (with number 1s circled in red). This means that there is only
        one space remaining in the far left column where a 1 could possibly go –
        circled in green. This is how the process of elimination works in Sudoku
        – you find out which spaces are available, which numbers are missing –
        and then deduce, based on the position of those numbers within the grid,
        which numbers fit into each space.
        <br />
        <br />
        Sudoku rules are relatively uncomplicated – but the game is infinitely
        varied, with millions of possible number combinations and a wide range
        of levels of difficulty. But it’s all based on the simple principles of
        using numbers 1-9, filling in the blank spaces based on deductive
        reasoning, and never repeating any numbers within each square, row or
        column.
      </p>
    </Wrapper>
  )
}
export default Main

const Wrapper = styled('div')(() => ({
  margin: 'auto',
  textTransform: 'none',
  maxWidth: '680px',
  padding: '.5rem',
  color: 'var(--text-700)',
  height: 'calc(100vh - 53.5px)',
  overflow: 'auto',
  textAlign: 'center',

  h1: {
    padding: '1.5rem 1.5rem 0',
  },
  p: {
    textAlign: 'justify',
    lineHeight: '1.8rem',
    color: 'var(--text-500)',
  },
  img: {
    maxWidth: '90vw',
    marginBottom: '2rem',
  },
  '.last': {
    marginBottom: '2rem',
  },
}))
