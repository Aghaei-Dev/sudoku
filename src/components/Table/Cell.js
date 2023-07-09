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

{
  /* <span>1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>5</span>
<span>6</span>
<span>7</span>
<span>8</span>
<span>9</span> */
}
const CellWrapper = styled('div')(() => ({
  border: '.1rem solid var( --bg-border-light)',
  fontSize: ' 1.5rem',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  color: 'var(--clr-black)',
  // gridTemplateColumns: ' repeat(3, 1fr)',
  // gridTemplateRows: ' repeat(3, 1fr)',
}))
