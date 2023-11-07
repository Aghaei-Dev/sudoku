import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'

export default function Square({ children, number }) {
  const { selectedSquare, setSelectedSquare } = useGlobalContext()

  return (
    <SquareWrapper
      onClick={() => {
        setSelectedSquare(number)
      }}
      style={{
        background: number === selectedSquare && 'var(--bg-p-100)',
      }}>
      {children}
    </SquareWrapper>
  )
}

const SquareWrapper = styled('div')(() => ({
  border: '1px solid var(--table-line-dark)',
  display: 'grid',
  gridTemplateColumns: ' repeat(3, 1fr)',
  gridTemplateRows: ' repeat(3, 1fr)',
}))
