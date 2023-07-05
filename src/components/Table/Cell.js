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
  } = useGlobalContext()
  //what must colored

  return (
    <CellWrapper
      onClick={() => {
        setSelectedNumber(number)
        setSelectedNumberIndex(index)
        console.log(`square :${selectedSquare}   cell :${selectedNumberIndex}`)
      }}
      style={{
        background:
          ((number === selectedNumber && selectedNumber !== 0) ||
            (selectedNumberIndex === index && selectedSquare === square)) &&
          'var(--blue-200)',
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
