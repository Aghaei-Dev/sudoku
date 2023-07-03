import React, { useState, useEffect } from 'react'
import ModalOverlay from './ModalOverlay'
import { useGlobalContext } from '../context/'
import { Sudoku } from '../functions'
import Cell from './Cell'
import Square from './Square'

const Table = ({ N, K }) => {
  const { isModalOpen, isAlert } = useGlobalContext()

  const [square, setSquare] = useState([])
  const [selected, setSelected] = useState({ square: '', row: '', col: '' })
  const [squareSelected, setSquareSelected] = useState('')
  const [cellSelected, setCellSelected] = useState('')

  useEffect(() => {
    const sudoku = new Sudoku(N, K)
    sudoku.fillValues()
    setSquare(sudoku.printSudoku())
  }, [])

  const clickHandler = (index) => {
    setSelected({ ...selected, square: index })
  }
  const clickHandlerCell = (index) => {
    setCellSelected(index)
  }
  switch (squareSelected) {
    case 0:
      console.log('left-top')
      break
    case 1:
      console.log('center-top')
      break
    case 2:
      console.log('right-top')
      break
    case 3:
      console.log('left-center')
      break
    case 4:
      console.log('center-center')
      break
    case 5:
      console.log('right-center')
      break
    case 6:
      console.log('left-bottom')
      break
    case 7:
      console.log('center-bottom')
      break
    case 8:
      console.log('right-bottom')
      break
    default:
      new Error('fuck')
  }
  return (
    <div id='table'>
      {square.map((item, index) => {
        return (
          <Square
            key={index}
            index={index}
            selected={squareSelected === index ? 'select square' : 'square'}
            clickHandler={clickHandler}>
            {square[index].map((item, inde) => {
              return (
                <Cell
                  clickHandlerCell={clickHandlerCell}
                  index={index}
                  inde={inde}
                  key={inde}
                  number={item}
                  selectedCell={
                    cellSelected === inde && squareSelected === index
                      ? 'select-cell cell'
                      : 'cell'
                  }
                />
              )
            })}
          </Square>
        )
      })}
      {isModalOpen && <ModalOverlay />}
      {isAlert && <ModalOverlay alert />}
    </div>
  )
}

export default Table

// here is fucked up

//working on coloring of cell

//with select we wanna color up  row and col
