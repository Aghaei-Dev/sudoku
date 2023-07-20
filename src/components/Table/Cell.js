import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'
import { MicroCell } from '../'
const Cell = ({ val, conflict, editable, mistake, note, index, square }) => {
  const {
    selectedNumber,
    setSelectedNumber,
    selectedNumberIndex,
    selectedSquare,
    setSelectedNumberIndex,
  } = useGlobalContext()

  //what must colored
  //square coloring and same numbers and now cell
  const condition_1 =
    (val === selectedNumber && selectedNumber !== 0 && 'var(--bg-p-200)') ||
    (selectedNumberIndex === index &&
      selectedSquare === square &&
      'var(--bg-p-200)')

  return (
    <CellWrapper
      onClick={() => {
        setSelectedNumber(val)
        setSelectedNumberIndex(index)
      }}
      style={{
        background: condition_1 || (mistake && 'var(--bg-error)'),
        color:
          (mistake && 'var(--clr-error)') ||
          (mistake === false && editable === true && 'var(--bg-p-600)'),
      }}>
      {val === 0 ? '' : val}
      {val === 0 && <MicroCell array={note} />}
    </CellWrapper>
  )
}

export default Cell

const CellWrapper = styled('div')(() => ({
  border: '.1rem solid var(--table-line-light)',
  fontSize: ' 1.5rem',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  color: 'var(--bg-black)',
  '*': {
    cursor: 'pointer',
  },
  '@media (max-height: 700px) and (width<= 700px)': {
    fontSize: ' 1.3rem',
  },
}))
