import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'
const Cell = ({ number, index, square }) => {
  const {
    selectedNumber,
    setSelectedNumber,
    selectedNumberIndex,
    selectedSquare,
    setSelectedNumberIndex,
    fault,
    setFault,
  } = useGlobalContext()
  //what must colored

  //square coloring and same numbers and now cell
  const condition_1 =
    (number === selectedNumber && selectedNumber !== 0 && 'var(--blue-200)') ||
    (selectedNumberIndex === index &&
      selectedSquare === square &&
      'var(--blue-200)')

  //square coloring and same numbers and now cell
  const condition_2 =
    selectedNumberIndex === index &&
    selectedSquare === square &&
    fault &&
    '#ff9aaf'

  return (
    <CellWrapper
      onClick={() => {
        setFault(false)
        setSelectedNumber(number)
        setSelectedNumberIndex(index)
        // console.log(`square :${selectedSquare}   cell :${selectedNumberIndex}`)
      }}
      style={{
        background: condition_2 || condition_1,
      }}>
      {number === 0 ? '' : number}
    </CellWrapper>
  )
}

export default Cell
const CellWrapper = styled('div')(() => ({
  border: '.1rem solid var( --bg-border-light)',
  fontSize: ' 1.5rem',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  color: 'var(--blue-900)',
  '.selected-cell': {
    background: 'red',
  },
}))
