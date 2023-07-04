import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'

import ModalOverlay from '../ModalOverlay'
import { useGlobalContext } from '../../context'

import { Square, Cell } from '../../components'
import { Sudoku } from '../../functions'
const Table = ({ N, K }) => {
  const { isModalOpen, isAlert, width } = useGlobalContext()

  const [square, setSquare] = useState([])

  useEffect(() => {
    const sudoku = new Sudoku(N, K)
    sudoku.fillValues()

    setSquare(sudoku.printSudoku())
    // console.log(sudoku.printAnswer())
  }, [K, N])

  return (
    <TableWrapper width={width}>
      {square.map((item, index) => {
        return (
          <Square key={index} index={index} number={index}>
            {square[index].map((item, index) => {
              return <Cell number={item} key={index} index={index} />
            })}
          </Square>
        )
      })}
      {isModalOpen && <ModalOverlay />}
      {isAlert && <ModalOverlay alert />}
    </TableWrapper>
  )
}

export default Table
const TableWrapper = styled('div')(({ width }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  border: ' 1px solid var(--bg-border-dark)',
  borderRadius: ' var(--radius)',
  width: '50vw',
  maxWidth: '500px',
  height: width,
  maxHeight: '500px',
  cursor: 'pointer',
  position: 'relative',
  color: 'var(--primary-blue-10)',
  '@media (width<= 800px)': {
    width: '96vw',
  },
}))
