import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'
const Cell = ({ val, conflict, mistake, index, square }) => {
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
        // console.log(`square :${selectedSquare}   cell :${selectedNumberIndex}`)
      }}
      style={{
        background: condition_1 || (mistake && '#fe9999'),
        color: mistake && 'red',
      }}>
      {val === 0 ? '' : val}
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
  border: '.1rem solid var(--table-line-light)',
  fontSize: ' 1.5rem',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  color: 'var(--bg-black)',
  // gridTemplateColumns: ' repeat(3, 1fr)',
  // gridTemplateRows: ' repeat(3, 1fr)',
}))
