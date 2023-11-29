import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'
export default function MicroCell({ array }) {
  const { selectedNumber } = useGlobalContext()
  return (
    <MicroCellWrapper>
      {array.map((item, index) => {
        return (
          index !== 0 && (
            <span
              style={{
                background: item === selectedNumber && 'var(--bg-p-200)',
                color: item === selectedNumber && 'var(--bg-p-50)',
              }}
              key={index}
            >
              {item}
            </span>
          )
        )
      })}
    </MicroCellWrapper>
  )
}

const MicroCellWrapper = styled('div')(() => ({
  fontSize: '.5rem',
  display: 'grid',
  gridTemplateColumns: ' repeat(3, 1fr)',
  gridTemplateRows: ' repeat(3, 1fr)',
  placeSelf: 'stretch',
  span: {
    display: 'grid',
    placeItems: 'center',
    color: 'var(--text-800)',
  },
}))
