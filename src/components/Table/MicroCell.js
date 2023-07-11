import React from 'react'
import { styled } from '@mui/material/styles'
const MicroCell = ({ array }) => {
  return (
    <MicroCellWrapper>
      {array.map((item, index) => {
        return index !== 0 && <span key={index}>{item}</span>
      })}
    </MicroCellWrapper>
  )
}

export default MicroCell

const MicroCellWrapper = styled('div')(() => ({
  fontSize: '.5rem',
  display: 'grid',
  gridTemplateColumns: ' repeat(3, 1fr)',
  gridTemplateRows: ' repeat(3, 1fr)',
  placeSelf: 'stretch',
  span: {
    display: 'grid',
    placeItems: 'center',
  },
}))
